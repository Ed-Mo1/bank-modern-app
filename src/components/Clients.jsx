import styles from "../styles";
import { clients } from "../constants/index";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `} id="clients" >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] w-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
