using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WEB_aparshukov.Models.Ark
{
    [Table("ark_news")]
    public class NewsModel
    {
        [Key]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Name { get; set; }
        public DateTime DateNew { get; set; }
    }
}
