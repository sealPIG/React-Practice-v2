using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice.Server.Data;
using Practice.Server.Models;
using System.Security.Cryptography;

namespace Practice.Server.Controller
{
  [Route("api/[controller]")]
  [ApiController]
  public class MovieListController : ControllerBase
  {
    private readonly ApiContext context;

    private bool CheckId(uint _id)
    {
      if (!context.MovieList.Any())
        return false;

      var list = context.MovieList.ToList();

      if (_id >= list.Count)
        return false;

      return true;
    }

    public MovieListController(ApiContext _context)
    {
      context = _context;
    }

    [HttpPut]
    public JsonResult Put(Movie _movie)
    {
      context.MovieList.Add(_movie);

      return new JsonResult(Ok());
    }

    [HttpGet]
    public JsonResult Get()
    {
      //if (!context.MovieList.Any())
      //return new JsonResult(NotFound());

      var list = context.MovieList.ToList();

      return new JsonResult(Ok(list));
    }

    [HttpGet("{id:int}")]
    public JsonResult Get(uint _id)
    {
      if (!CheckId(_id - 1))
        return new JsonResult(NotFound());

      var result = context.MovieList.ToList().ElementAt((int)_id);

      if (result == null)
        return new JsonResult(NotFound());

      return new JsonResult(Ok(result));
    }

    [HttpPost]
    public JsonResult Post(uint _id, Movie _movie)
    {
      if (!CheckId(_id - 1))
        return new JsonResult(NotFound());

      context.MovieList.ToList()[(int)_id] = _movie;

      return new JsonResult(Ok());
    }
  }
}
