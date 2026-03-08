import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Page Not Found | Realtravo" description="The page you're looking for doesn't exist. Explore trips, hotels, and adventures on Realtravo." />
      <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
        <div className="text-center max-w-md mx-auto">
          {/* Illustrated Icon */}
          <div className="relative mx-auto mb-8 h-32 w-32">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-primary/5 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-primary/60" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-7xl font-black text-primary tracking-tighter mb-2">404</h1>
          <h2 className="text-xl font-bold text-foreground mb-2">Lost in the wild!</h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            This trail doesn't exist. Let's get you back to discovering amazing destinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full font-bold gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-bold gap-2">
              <Link to="/category/campsite">
                <Search className="h-4 w-4" />
                Explore Adventures
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
