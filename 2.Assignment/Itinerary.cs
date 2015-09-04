using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Assignment
{
    public class Itinerary : IComparable<Itinerary>
    {
        public string OriginAirportCode { get; set; }

        public string DestinationAirportCode { get; set; }

        public TimeSpan FlightTime { get; set; }

        public int NumberOfStops { get; set; }

        public TimeSpan TotalLayoverTime { get; set; }

        public string Airline { get; set; }

        public DateTime UtcDepartureTime { get; set; }

        public DateTime UtcArrivalTime { get; set; }

        public decimal BaseFareInUSD { get; set; }

        public decimal MarkupInUSD { get; set; }

        public decimal TotalFareInUSD { get { return this.BaseFareInUSD + this.MarkupInUSD; } }

        public int Points { get { return Points; } set { Points = 100; } }

        public bool IsNoRule { get { return IsNoRule; } set { IsNoRule = false; } }
    
        public int CompareTo(Itinerary other)
        {
 	        if ( this.Points < other.Points ) { return 1; }
            else if ( this.Points > other.Points ) {return -1; }
            else { return 0; }
        }
    }
}
