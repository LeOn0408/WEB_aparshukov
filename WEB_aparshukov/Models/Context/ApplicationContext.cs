using Microsoft.EntityFrameworkCore;
using WEB_aparshukov.Models.Ark;

namespace WEB_aparshukov.Models.Context
{
    public class ApplicationContext:DbContext
    {
        public DbSet<RoadmapModel> Roadmap => Set<RoadmapModel>();
        public DbSet<NewsModel> News => Set<NewsModel>();
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
