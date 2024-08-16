using Microsoft.AspNetCore.Mvc;
using TvShowApi.Models;
using TvShowApi.Services;

namespace TvShowApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TVShowController : ControllerBase
    {
        private readonly TVShowService _tvShowService;
        public TVShowController(TVShowService tvShowService)
        {
            _tvShowService = tvShowService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TVShow>> GetAll()
        {
            return Ok(_tvShowService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<TVShow> GetById(int id)
        {
            var tvShow = _tvShowService.GetById(id);
            if (tvShow == null) return NotFound();
            return Ok(tvShow);
        }

        [HttpPost]
        public ActionResult<TVShow> Create(TVShow tvShow)
        {
            _tvShowService.Add(tvShow);
            return Ok(tvShow); //200
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, TVShow tvShow)
        {
            var existingTVShow = _tvShowService.GetById(id);
            if (existingTVShow == null) return NotFound();

       
            tvShow.Id = id;// validate if existe

            _tvShowService.Update(tvShow);
            return Ok(tvShow);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tvShow = _tvShowService.GetById(id);
            if (tvShow == null) return NotFound();

            _tvShowService.Delete(id);
            return Ok(id);// return id and 200 :v
        }
    }
}
