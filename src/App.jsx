import styles from "./styles";
import {
  Navbar,
  Hero,
  Testimonials,
  CTA,
  Footer,
  Stats,
  Billing,
  Clients,
  CardDeal,
  Business,
} from "./components/index";
const App = () => (
  <div className="bg-primary overflow-hidden w-full">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
