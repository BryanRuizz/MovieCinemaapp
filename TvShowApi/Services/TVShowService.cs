﻿using TvShowApi.Models;

namespace TvShowApi.Services
{
    public class TVShowService
    {
        private readonly List<TVShow> _tvShows;

        public TVShowService()
        {
           
            _tvShows = new List<TVShow>
        {
            new TVShow { Id = 1, Name = "Mr. Robot", Favorite = true },
            new TVShow { Id = 2, Name = "Deadpool & Wolverine", Favorite = true },
            new TVShow { Id = 3, Name = "The Social Dilemma", Favorite = true },
            new TVShow { Id = 4, Name = "Fast and furious", Favorite = false },
        };
        }

        public IEnumerable<TVShow> GetAll() => _tvShows;

        public TVShow GetById(int id) => _tvShows.FirstOrDefault(t => t.Id == id);
        // if I put ?? new TVShow make a false 200, keep this to 404.

        public void Add(TVShow tvShow)
        {
            tvShow.Id = _tvShows.Max(t => t.Id) + 1; 
            _tvShows.Add(tvShow);
        }

        public void Update(TVShow tvShow)
        {
            var existingTVShow = GetById(tvShow.Id);
            if (existingTVShow != null)
            {
                existingTVShow.Name = tvShow.Name;
                existingTVShow.Favorite = tvShow.Favorite;
            }
        }

        public void Delete(int id)
        {
            var tvShow = GetById(id);
            if (tvShow != null)
            {
                _tvShows.Remove(tvShow);
            }
            
        }
    }

}
