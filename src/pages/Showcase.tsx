import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Header } from "@/components/Header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Users, Target } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Bihar Motors Digital Transformation",
    client: "Bihar Motors Pvt Ltd",
    industry: "Automotive",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop",
    description: "Complete digital marketing overhaul for a leading automotive dealership in Bihar",
    results: {
      leads: "450% increase",
      sales: "₹3.2Cr revenue",
      conversion: "12% conversion rate"
    },
    technologies: ["Google Ads", "Facebook Marketing", "SEO", "Landing Pages"],
    duration: "6 months",
    testimonial: "Elevate360 transformed our business completely. We've never seen such growth!",
    liveUrl: "https://biharmotors.example.com"
  },
  {
    id: 2,
    title: "RetailMax E-commerce Success",
    client: "RetailMax Industries",
    industry: "FMCG",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Multi-channel marketing strategy for FMCG brand expansion across Eastern India",
    results: {
      reach: "2M+ people reached",
      engagement: "35% engagement rate",
      sales: "280% sales boost"
    },
    technologies: ["Social Media", "Influencer Marketing", "Performance Marketing", "Analytics"],
    duration: "8 months",
    testimonial: "The ROI we achieved was beyond our expectations. Excellent work!",
    liveUrl: "https://retailmax.example.com"
  },
  {
    id: 3,
    title: "EduTech Platform Launch",
    client: "Bihar Learning Hub",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    description: "Complete brand launch and student acquisition campaign for online learning platform",
    results: {
      students: "10,000+ enrollments",
      awareness: "85% brand recall",
      growth: "500% user growth"
    },
    technologies: ["Content Marketing", "Video Campaigns", "Social Media", "Google Ads"],
    duration: "4 months",
    testimonial: "They understood our vision perfectly and executed it flawlessly.",
    liveUrl: "https://biharlearning.example.com"
  },
  {
    id: 4,
    title: "Healthcare Digital Presence",
    client: "Wellness Central",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    description: "Trust-building digital marketing campaign for healthcare services",
    results: {
      appointments: "300% increase",
      trust: "95% patient satisfaction",
      reach: "50k+ families reached"
    },
    technologies: ["Trust Campaigns", "Local SEO", "Patient Reviews", "Educational Content"],
    duration: "5 months",
    testimonial: "Professional approach and excellent results. Highly recommended!",
    liveUrl: "https://wellnesscentral.example.com"
  }
]

const Showcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Live Results</span>
              <br />
              <span className="text-gradient">That Speak</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See how we've transformed businesses across Bihar and Eastern India. Real projects, real results, real growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-white/10 overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        {project.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground mb-4">
                      {project.client}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-background/30 rounded-lg">
                          <div className="text-lg font-bold text-gradient">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                      "{project.testimonial}"
                    </blockquote>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </Button>
                      <Button variant="outline" className="glass border-white/20">
                        <Target className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 via-accent/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              Results That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "500%", label: "Average Growth" },
              { icon: Users, value: "100+", label: "Brands Transformed" },
              { icon: Target, value: "₹50Cr+", label: "Revenue Generated" },
              { icon: ExternalLink, value: "95%", label: "Client Retention" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary p-4 mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showcase