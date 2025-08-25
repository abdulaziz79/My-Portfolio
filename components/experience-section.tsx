"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Built MVP from scratch using React and Node.js. Collaborated with design team to create intuitive user experiences.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Specialized in React and modern CSS frameworks.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < experiences.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-24 bg-border" />}
              <Card className="mb-8 ml-12 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute -left-6 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{experience.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
