using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEB_aparshukov.Models.Ark;
using WEB_aparshukov.Models.Context;

namespace WEB_aparshukov.Controllers.Ark
{
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly ApplicationContext db;

        public NewsController(ApplicationContext db)
        {
            this.db = db;
        }
        [HttpGet]//тестовый
        public Task<List<NewsModel>> Get()
        {
            return db.News.OrderByDescending(x => x.DateNew).Take(5).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task <ActionResult<NewsModel>> Get(int id)
        {
            var news = await db.News.FirstOrDefaultAsync(x => x.Id == id);
            if (news == null)
                return NotFound();
            return new ObjectResult(news);
        }
    }
}
