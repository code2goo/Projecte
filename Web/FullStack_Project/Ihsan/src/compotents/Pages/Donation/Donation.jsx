import { Link } from "react-router-dom";
import creditCart from "./img/icons8-credit-card-96.png";
import paypal from "./img/icons8-paypal-app-375.png";
import './Donation.css';

const Donation = () => {
  return (
    <div className="donation">
      <br /><br /><br />
        <p> يوجد لدينا طريقتين للتبرع : إما عن طريق التحويل البنكي أو عن طريق بايبال</p>
        <div className="donationCard d-sm-flex justify-content-sm-center">
        <div className="card" style={{width: "13rem"}}>
            <img src={creditCart} className="card-img-top" alt="creditCart" />
            <div className="card-body">
              <h5 className="card-title">التحويل البنكي</h5><br />
              <p className="card-text">
                          Ihsan e.V <br />
                          IBAN: DE38 4416 0014 5011 6204 00 <br />
                          BIC: GENODEM1DOR  <br />
                          Verwendungszweck: sadaka 
              </p>
              {/* <Link href="#" className="btn btn-primary">المزيد عن الحالة</Link> */}
            </div>
        </div>
        <div className="card" style={{width: "13rem"}}>
            <img src={paypal} className="card-img-top" alt="paypal" />
            <div className="card-body">
              <h5 className="card-title">تحويل بايبال</h5>
                  <p className="card-text">
                       <Link>
                       http://paypal.me/I7san
                       </Link><br />
                        <span>
                            Verwendungszweck: sadaka 
                        </span>
                  </p>
              {/* <Link href="#" className="btn btn-primary">المزيد عن الحالة</Link> */}

            </div>
        </div>
      </div>
    </div>
  )
};

export default Donation;