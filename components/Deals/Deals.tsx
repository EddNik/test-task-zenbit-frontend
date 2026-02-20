import { Deal } from "@/types/deals";
import css from "./Deals.module.css";

function Deals({ deals }: { deals: Deal[] }) {
  if (!deals || deals.length === 0) {
    return <p>No deals available at the moment.</p>;
  }
  //   deals.map(deal => {
  //     console.log("Image URL:", deal.image);
  //   });
  return (
    <>
      {deals.length > 0 && (
        <ul className={css.list}>
          {deals.map(deal => (
            <li
              key={deal.id}
              className={css.listItem}
              style={{
                backgroundImage: `url('${deal.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h2 className={css.title}>{deal.title}</h2>
                <p className={css.content}>{deal.price}</p>
                <p className={css.content}>{deal.tiket}</p>
              </div>
              <div>
                <p className={css.content}>{deal.yield}</p>
                <p className={css.content}>{deal.daysLeft}</p>
              </div>
              <p className={css.content}>{deal.sold}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Deals;
