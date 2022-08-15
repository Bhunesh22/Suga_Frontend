import './paymentDrop.css';
import { cashfreeSandbox, cashfreeProd } from 'cashfree-dropjs';
import { useState } from 'react';
import { dropinComponents } from './DropComponents';


function PaymentDrop() {
  const [orderToken, setOrderToken] = useState('7RyleyCOzRftapYCmSDb');
  const [checkedState, setCheckedState] = useState(
    new Array(dropinComponents.length).fill(false)
  );
  const [style, setStyle] = useState({});
  const [isProd, setIsProd] = useState(false);
  const [components, setComponents] = useState([]);
  const cbs = (data) => {
    if (data.order && data.order.status === 'PAID') {
      alert('order is paid. Call api to verify');
    }
  };
  const cbf = (data) => {
    alert(data.order.errorText || 'AAAA');
  };
  const renderDropin = () => {
    if (orderToken === '') {
      alert('Order Token is empty');
      return;
    }
    if (!components.length) {
      alert('No drop in specified');
      return;
    }
    let parent = document.getElementById('drop_in_container');
    parent.innerHTML = '';
    let cashfree;
    if (isProd) {
      cashfree = new cashfreeProd.Cashfree();
    } else {
      cashfree = new cashfreeSandbox.Cashfree();
    }
    console.log('before Initialisation');
    cashfree.initialiseDropin(parent, {
      orderToken,
      onSuccess: cbs,
      onFailure: cbf,
      components,
      style
    });
    console.log('after Initialisation');
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let comp = [];
    updatedCheckedState.forEach((item, index) => {
      if (item) {
        comp.push(dropinComponents[index].id);
      }
    });
    setComponents(comp);
  };

  const handleStyleChange = () => (e) => {
    setStyle({
      ...style,
      [e.target.id]: e.target.value
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cashfree Dropin
        </a>
      </header>
      <div className="mt-2">
        <span className="order-token mr-8">Order Token :</span>
        <input
          type="text"
          placeholder="order_token"
          id="orderToken"
          value={orderToken}
          className="inputText"
          onChange={(e) => setOrderToken(e.target.value)}
        />
      </div>
      <p className="order-token">Choose components</p>
      <ul className="toppings-list">
        {dropinComponents.map(({ name, id }, index) => {
          return (
            <>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={id}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                key={id}
              />
              <label className="mr-8" htmlFor={`custom-checkbox-${index}`}>
                {name}
              </label>
            </>
          );
        })}
      </ul>
      <div>
        <p className="order-token">Style your Dropin</p>
        <input
          className="style-dropin mr-1"
          type="text"
          id="backgroundColor"
          key="backgroundColor"
          placeholder="Background Color"
          onChange={handleStyleChange()}
        />
        <input
          className="style-dropin mr-1"
          type="text"
          id="theme"
          key="theme"
          placeholder="Theme"
          onChange={handleStyleChange()}
        />
        <input
          className="style-dropin mr-1"
          type="text"
          id="color"
          key="color"
          placeholder="Color"
          onChange={handleStyleChange()}
        />
        <input
          className="style-dropin mr-1"
          type="text"
          id="errorColor"
          key="errorColor"
          placeholder="Error Color"
          onChange={handleStyleChange()}
        />
        <input
          className="style-dropin mr-1"
          type="text"
          id="fontSize"
          key="fontSize"
          placeholder="Font Size"
          onChange={handleStyleChange()}
        />
        <input
          className="style-dropin mr-1"
          type="text"
          id="fontFamily"
          key="fontFamily"
          placeholder="Font Family"
          onChange={handleStyleChange()}
        />
      </div>
      <div className="mt-2">
        <input
          type="checkbox"
          name="prod"
          id="prod-check"
          checked={isProd}
          onChange={() => setIsProd(!isProd)}
        />
        <label className="mr-8" htmlFor="prod-check">
          Production Mode
        </label>
      </div>
      <button className="btn-render mt-2" onClick={renderDropin}>
        Render
      </button>
      <div
        className="dropin-parent"
        id="drop_in_container"
        style={{ height: '600px' }}
      >
        Your component will come here
      </div>
    </div>
  );
}

export default PaymentDrop;
