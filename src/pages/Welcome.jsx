import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.25, 0]);    //here second is the breakpoints and third is the properties values
  const yCity = useTransform(scrollY, [0, 200, 300], [0, -100, -150]);
  const opacityHero = useTransform(scrollY, [0, 200, 500], [1, 0.5, 0]);
  const yHero = useTransform(scrollY, [0, 100, 200, 300], [0, -100, -150, -200]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 200]);

  return (
    <>
      <header id="welcome-header" className="relative w-full h-screen bg-cover bg-center overflow-hidden">
  <motion.div id="welcome-header-content" 
    style={{ scale: scaleText, y: yText }}
    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white"
  >
    <h1 className="text-4xl font-bold mb-4">Ready for a challenge?</h1>
    <Link to="/challenges" className="text-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-md">
      Get Started
    </Link>
  </motion.div>

  <motion.img
    style={{ opacity: opacityCity, y: yCity }}
    src={cityImg}
    alt="A city skyline touched by sunlight"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <motion.img
    style={{ opacity: opacityHero, y: yHero }}
    src={heroImg}
    alt="A superhero wearing a cape"
    className="absolute bottom-0 right-0 w-1/2 md:w-1/3"
  />
</header>


      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
