using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace MyWebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            ConfigureDIServices(builder);
            

            builder.Host.UseSerilog((context, configuration) =>
                configuration.WriteTo.Console()
                             .MinimumLevel.Information()
            );

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");   
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            // what does this exactly do? does it create a page based on status code?
            app.UseStatusCodePagesWithReExecute("/Error/{0}");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAntiforgery();

            app.MapControllerRoute(name: "default", pattern: "{controller=Account}/{action=Login}/{id?}");

            app.MapStaticAssets();
            app.MapRazorPages();
            app.MapBlazorHub();
            
            app.Run();
        }
        public static void ConfigureDIServices(WebApplicationBuilder builder)
        {
            builder.Services.AddBlazorBootstrap();

            builder.Services.AddRazorComponents()
                            .AddInteractiveServerComponents();
            builder.Services.AddServerSideBlazor();
            builder.Services.AddControllersWithViews();
            builder.Services.AddRazorPages();
        }
    }
}