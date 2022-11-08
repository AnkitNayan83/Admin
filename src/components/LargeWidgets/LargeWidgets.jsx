import React from "react";
import "./LargeWidgets.css";

export const LargeWidgets = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="largeWidgets">
      <h2 className="largeWidgets-title">Latest Transaction</h2>

      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">Rs4252.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1630568667468-fe2a669d8861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jecika Pain</span>
            </td>
            <td className="widgetLgDate">13 May 2021</td>
            <td className="widgetLgAmount">Rs12245.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jason Durelo</span>
            </td>
            <td className="widgetLgDate">21 Apr 2021</td>
            <td className="widgetLgAmount">Rs4522.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i.ibb.co/tpPJjB3/Whats-App-Image-2022-06-21-at-5-48-06-PM.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ankit Nayan</span>
            </td>
            <td className="widgetLgDate">13 May 2021</td>
            <td className="widgetLgAmount">Rs252200.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
