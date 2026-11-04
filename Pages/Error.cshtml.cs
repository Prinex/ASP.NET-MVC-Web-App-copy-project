using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.IO;

namespace MyWebApp.Pages
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [IgnoreAntiforgeryToken]
    public class ErrorModel : PageModel
    {
#nullable enable
        public int? ResponseStatusCode { get; set; }
        public string? OriginalPathAndQuery { get; set; }
        public string? RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        public string? ExceptionMessage { get; set; }

        private readonly ILogger<ErrorModel> _logger;

        public ErrorModel(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        public void OnGet(int? statusCode)
        {
            ResponseStatusCode = statusCode;
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            var exceptionHandlerPathFeature = HttpContext.Features.Get<IExceptionHandlerPathFeature>();
            var exceptionStatusCodeFeature = HttpContext.Features.Get<IStatusCodeReExecuteFeature>();   
            
            if (exceptionHandlerPathFeature?.Error is FileNotFoundException)
            {
                ExceptionMessage = "The file was not found.";
                _logger.LogError(exceptionHandlerPathFeature.Error, "File not found error occurred at path: {Path}", exceptionHandlerPathFeature.Path);
            }
            if (exceptionHandlerPathFeature?.Error is DivideByZeroException)
            {
                ExceptionMessage = "Division by zero occured, which is an invalid operation.";
                _logger.LogError(exceptionHandlerPathFeature.Error, "Division by zero error occurred at path: {Path}", exceptionHandlerPathFeature.Path);
            }
            if (statusCode.HasValue)
            {
                switch (statusCode.Value)
                {
                    case 404:
                        ExceptionMessage = "The page you're looking for can't be found.";
                        _logger.LogWarning("{statusCode} error occurred at path: {Path}", statusCode, exceptionStatusCodeFeature?.OriginalPath);
                        break;

                    case 403:
                        ExceptionMessage = "Your access to this resource on the server is denied.";
                        _logger.LogWarning("{statusCode} error occurred at path: {Path}", statusCode, exceptionStatusCodeFeature?.OriginalPath);
                        break;

                    default:
                        ExceptionMessage = $"Error {statusCode.Value}";
                        _logger.LogWarning("Error {StatusCode} occurred at path: {Path}", statusCode.Value, exceptionStatusCodeFeature?.OriginalPath);
                        break;
                }
            }
            if (exceptionHandlerPathFeature?.Path == "/")
            {
                ExceptionMessage ??= string.Empty;
                ExceptionMessage += " Page: Home.";
            }
        }
    }
}