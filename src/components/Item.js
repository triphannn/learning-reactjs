import React, { Component } from "react";

class Item extends Component {
  render() {
    let { item, index } = this.props;
    let classNameLabel = "";
    let levelLabel = "";
    switch (item.level) {
      case 0:
        classNameLabel = "label label-info";
        levelLabel = "Low";
        break;
      case 1:
        classNameLabel = "label label-warning";
        levelLabel = "Medium";
        break;
      case 2:
        classNameLabel = "label label-danger";
        levelLabel = "High";
        break;
      default:
        classNameLabel = "label label-dark";
        levelLabel = "Unknow";
        break;
    }
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span className={classNameLabel}>{levelLabel}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm">
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
