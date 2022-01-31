var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
services.AddMemoryCache();

var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();
