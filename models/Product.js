const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: [true, "Please enter product name"],
      unique: [true, "Product name already exists"],
      minLength: [3, "Minimum 3 characters required"],
      maxLength: [100, "Maximum 100 characters allowed"],
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
    unit: {
      type: String,
      required: [true, "Please enter product unit"],
      enum: {
        values: ["kg", "litre", "piece"],
        message: "Unit is either: kg or piece or litre",
      },
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
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status is either: in-stock or outOfStock or discontinued",
      },
    },
    image: {
      type: String,
      required: [true, "Please enter product image"],
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
