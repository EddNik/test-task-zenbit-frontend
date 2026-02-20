import { Deal } from "@/types/deals";
import css from "./Deals.module.css";

function Deals({ deals }: { deals: Deal[] }) {
  if (!deals || deals.length === 0) {
    return <p>No deals available at the moment.</p>;
  }

  function formatPrice(price: number | string): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

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
              <div className={css.contentWrapper}>
                <h2 className={css.title}>{deal.title}</h2>
                <p className={css.content}>{formatPrice(deal.price)} Dhs</p>
                <p className={css.content}>
                  Tiket - {formatPrice(deal.tiket)} Dhs
                </p>
              </div>
              <div className={css.contentWrapper}>
                <p className={css.content}>Yield {deal.yield}</p>
                <p className={css.content}>Days Left {deal.daysLeft}</p>
              </div>
              <p className={css.content}>Sold {deal.sold}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Deals;
