using Microsoft.EntityFrameworkCore;
using WEB_aparshukov.Models.Context;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;



services.AddMemoryCache();
services.AddControllers();

string connection = builder.Configuration.GetConnectionString("DefaultConnection");
ServerVersion vesrion = ServerVersion.AutoDetect(connection);
services.AddDbContext<ApplicationContext>(options =>
    options.UseMySql(connection, vesrion,
    mySqlOptions =>
    {
        mySqlOptions.EnableRetryOnFailure(
        maxRetryCount: 1,
        maxRetryDelay: TimeSpan.FromSeconds(5),
        errorNumbersToAdd: null);
    }));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();
app.Urls.Add("http://*:5008");
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
