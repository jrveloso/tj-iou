import React, { Fragment } from "react";
import ListItem from "./ListItem";

const List = ({ ious, handleCheck, checkedItems }) => {
  return (
    <div>
      <form className="py-2 flex flex-col">
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            return (
              <Fragment key={iou._id}>
                <h3 className="text-xl font-medium pt-1">{iou.date}</h3>
                <ListItem
                  id={iou._id}
                  name={iou.name}
                  sku={iou.sku}
                  handleCheck={handleCheck}
                  checkedItems={checkedItems}
                />
              </Fragment>
            );
          } else {
            return (
              <ListItem
                id={iou._id}
                key={iou._id}
                name={iou.name}
                sku={iou.sku}
                handleCheck={handleCheck}
                checkedItems={checkedItems}
              />
            );
          }
        })}
      </form>
    </div>
  );
};

export default List;
