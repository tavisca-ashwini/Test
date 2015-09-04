using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Assignment
{
    public class Sort
    {
        public List<Itinerary> SortItinerary(List<Itinerary> discounted)
        {
            var flights = discounted.OrderBy(fare => fare.Points)
                .ThenBy(fare => fare.MarkupInUSD)
                .ThenBy(fare => fare.NumberOfStops);

            return flights.ToList();
        }

        public List<Itinerary> IsSouthWestDallas(List<Itinerary> discounted, bool IsNoRule)
        {
            foreach(Itinerary itineraries in discounted)
            {
                if (itineraries.Airline == "SouthWest" && itineraries.OriginAirportCode == "Dallas")
                {
                    itineraries.Points = itineraries.Points * 7;
                    itineraries.IsNoRule = true;
                }
            }
            return discounted;
        }

        public List<Itinerary> IsAmericanOrDelta(List<Itinerary> discounted , bool IsNoRule)
        {
            foreach (Itinerary itineraries in discounted)
            {
                if (itineraries.Airline == "American" || itineraries.Airline == "Delta")
                {
                    if (DateTime.UtcNow.Month.ToString() == "December")
                    {
                        itineraries.Points = itineraries.Points * 7;
                        itineraries.IsNoRule = true;
                    }
                }
            }
            return discounted;
        }

        public List<Itinerary> IsSpiritAirways(List<Itinerary> discounted, bool IsNoRule)
        {
            foreach (Itinerary itineraries in discounted)
            {
                if (itineraries.Airline == "Spirit Airways" && itineraries.UtcDepartureTime > (DateTime.UtcNow.Date + TimeSpan.FromDays(3)))
                {
                     itineraries.Points = itineraries.Points * 7;
                     itineraries.IsNoRule = true;
                }
            }
            return discounted;
        }

        public List<Itinerary> AirlineOfTheMonth(List<Itinerary> discounted, bool IsNoRule)
        {
            foreach (Itinerary itineraries in discounted)
            {
                if (itineraries.Airline == "American Airlines")
                {
                    itineraries.Points = itineraries.Points * 7;
                }
            }
            return discounted;
        }
    }
}
