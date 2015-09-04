using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Assignment
{
    public class SearchEngine
    {
        Sort sort = new Sort();
        SearchEngine search = new SearchEngine();
        bool IsNoRule;
        public List<Itinerary> Process(List<Itinerary> discounted)
        {
            sort.SortItinerary(discounted);
            sort.IsAmericanOrDelta(discounted, IsNoRule);
            sort.IsSouthWestDallas(discounted, IsNoRule);
            sort.IsSpiritAirways(discounted, IsNoRule);

            if (IsNoRule == false)
            {
                sort.AirlineOfTheMonth(discounted, IsNoRule);
            }
            return discounted;
        }
    }
}
