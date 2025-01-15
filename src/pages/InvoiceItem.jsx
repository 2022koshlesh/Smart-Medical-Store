import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import "./Invoice.css";
import Products from "../components/Product.js";
import "./Auto.css"

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;

  const itemTable = items.map((item) => (
    <ItemRow
      key={item.itemId}
      item={item}
      onDelEvent={onRowDel}
      onItemizedItemEdit={onItemizedItemEdit}
      currency={currency}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="btn-add-item" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

const ItemRow = (props) => {
  const [itemName, setItemName] = useState(props.item.itemName);
  const [description, setDescription] = useState(props.item.itemDescription);
  const [price, setPrice] = useState(props.item.itemPrice || 0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handle item name change and auto-fill details
  const handleNameChange = (evt) => {
    const { value } = evt.target;
    setItemName(value); // Update local state
    props.onItemizedItemEdit(evt, props.item.itemId);

    // Filter suggestions based on user input
    const filteredSuggestions = Products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setItemName(suggestion.name); // Update local state for item name
    setDescription(suggestion.description); // Update local state for description
    setPrice(suggestion.price.replace("₹", "")); // Remove currency symbol and update price

    // Update parent state via props
    props.onItemizedItemEdit(
      { target: { name: "itemName", value: suggestion.name } },
      props.item.itemId
    );
    props.onItemizedItemEdit(
      { target: { name: "itemDescription", value: suggestion.description } },
      props.item.itemId
    );
    props.onItemizedItemEdit(
      { target: { name: "itemPrice", value: suggestion.price.replace("₹", "") } },
      props.item.itemId
    );

    setShowSuggestions(false); // Hide suggestions
  };

  return (
    <tr>
      <td style={{ width: "100%", position: "relative" }}>
        <EditableField
          onItemizedItemEdit={handleNameChange}
          cellData={{
            type: "text",
            name: "itemName",
            placeholder: "Item name",
            value: itemName,
            id: props.item.itemId,
          }}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="autocomplete-suggestions">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.name}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "text",
            name: "itemDescription",
            placeholder: "Item description",
            value: description,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: "100px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "number",
            name: "itemQuantity",
            min: 1,
            step: "1",
            value: props.item.itemQuantity,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: "150px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            leading: props.currency,
            type: "number",
            name: "itemPrice",
            min: 1,
            step: "0.01",
            precision: 2,
            textAlign: "text-end",
            value: price, // Use updated price
            id: props.item.itemId,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <Button
          variant="danger"
          onClick={() => props.onDelEvent(props.item)}
          className="text-white mt-1"
        >
          <BiTrash style={{ height: "20px", width: "20px" }} />
        </Button>
      </td>
    </tr>
  );
};

export default InvoiceItem;