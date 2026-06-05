import Image from "next/image";

export default function About() {
  const equipments = [
    {
      name: "Treadmill",
      image: "/equipment/treadmill.jpg",
      description: "Advanced cardio machine for endurance and weight loss.",
    },
    {
      name: "Bench Press",
      image: "/equipment/benchpress.jpg",
      description:
        "Professional-grade bench press station for strength training.",
    },
    {
      name: "Dumbbells",
      image: "/equipment/dumbbells.jpg",
      description: "Complete range of dumbbells for all fitness levels.",
    },
    {
      name: "Cable Machine",
      image: "/equipment/cablemachine.jpg",
      description: "Versatile machine for full-body workouts.",
    },
  ];

  const trainers = [
    {
      name: "Rahul Sharma",
      experience: "8+ Years Experience",
      specialization: "Strength & Conditioning Coach",
      image: "/trainers/trainer1.jpg",
    },
    {
      name: "Priya Singh",
      experience: "6+ Years Experience",
      specialization: "Certified Fitness Trainer & Nutrition Expert",
      image: "/trainers/trainer2.jpg",
    },
    {
      name: "Aman Verma",
      experience: "10+ Years Experience",
      specialization: "Bodybuilding & Personal Training",
      image: "/trainers/trainer3.jpg",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/gym-about.jpg"
              alt="Gym Interior"
              width={600}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">
              About Our Gym
            </h1>

            <p className="text-gray-300 leading-8 mb-5">
              Welcome to Gross Skilled Fitness Club, where fitness meets
              dedication. Our gym is designed to help individuals achieve their
              fitness goals through world-class equipment, certified trainers,
              personalized workout plans, and a motivating environment.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              Whether your goal is weight loss, muscle gain, strength building,
              endurance training, or overall wellness, we provide expert
              guidance and modern facilities to support your journey.
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-2">Address</h3>

              <p className="text-gray-300">
                Gross Skilled Fitness Club
                <br />
                2nd Floor, Fitness Plaza,
                <br />
                Sector 62, Noida,
                <br />
                Uttar Pradesh, India - 201309
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-zinc-950 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Our Equipment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipments.map((equipment, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
              >
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-yellow-400">
                    {equipment.name}
                  </h3>

                  <p className="text-gray-400 mt-3">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Meet Our Trainers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden text-center hover:shadow-lg hover:shadow-yellow-500/20 transition"
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {trainer.name}
                  </h3>

                  <p className="text-white mt-2">{trainer.specialization}</p>

                  <p className="text-gray-400 mt-3">{trainer.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
