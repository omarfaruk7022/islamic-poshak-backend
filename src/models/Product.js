import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    category: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please enter product name"],
      unique:[true, "Product name already exists"],

      // required: [true, "Please enter product name"],
      // trim: [true, "Please enter product name"],
      // minLength: [3, "Minimum 3 characters required"],
      // maxLength: [100, "Maximum 100 characters allowed"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      min: [0, "Price cannot be less than 0"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      min: [0, "Quantity cannot be less than 0"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["in-stock", "out-of-stock"],
        message: "Status is either: in-stock or out-of-stock ",
      },
    },
    image: {
      type: String,
      required: [true, "Please enter product image"],
    },
    addedBy: {
      type: String,
      required: [true, "Please enter addedBy"],
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt:{
    //   type: Date,
    //   default: Date.now,
    // }
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
    // categories: [
    //   {
    //     name: {
    //       type: String,
    //       required: [true, "Please enter category name"],
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
  }

  //   {
  //     timestamps: true,
  //   }
);

// productSchema.pre("save", function (next) {
//   if (this.quantity == 0) {
//     this.status = "out-of-stock";
//   }
//   next();
// });

// productSchema.methods.logger = function () {
//   console.log(`Product name is ${this.name}`);
// };

// productSchema.post("save", function (doc, next) {
//   if(doc.quantity == 0){
//     doc.status = "out-of-stock";
//     doc.save();
//   }
//   next();
// })

const Product = model("Product", productSchema);

export default Product;
