using Microsoft.AspNetCore.Mvc;
using WEB_aparshukov.Models.Context;
using Microsoft.EntityFrameworkCore;
using WEB_aparshukov.Models.Ark;

namespace WEB_aparshukov.Controllers
{
    [Route("api/[controller]")]
    public class RoadmapController:ControllerBase
    {
        private readonly ApplicationContext db;
        public RoadmapController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public Task<List<RoadmapModel>> Get()
        {
            return db.Roadmap.ToListAsync();
        }
    }
}
