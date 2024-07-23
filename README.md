# Shipping Cost Calculator

This repository contains the implementation of a `calculateShippingCost` function in JavaScript that calculates the shipping cost of a package based on its destination, weight, and priority.

## Function Description

The `calculateShippingCost` function takes three parameters:
1. `destination` (string): The shipping destination, which can be "domestic" or "international".
2. `weight` (number): The weight of the package in kilograms (kg).
3. `priority` (string): The shipping priority, which can be "standard", "express", or "priority".

### Calculation Rules

1. **Validation**:
   - If `destination` is not "domestic" or "international", return "Invalid destination".
   - If `weight` is less than or equal to 0, return "Invalid weight".
   - If `priority` is not "standard", "express", or "priority", return "Invalid priority".

2. **Domestic Shipping Costs**:
   - **Standard Priority**: Base cost is $5 per kg.
   - **Express Priority**: Base cost is $10 per kg.
   - **Priority Shipping**: Base cost is $20 per kg.
   - If weight is more than 10 kg, add an additional cost of $10.

3. **International Shipping Costs**:
   - **Standard Priority**: Base cost is $15 per kg.
   - **Express Priority**: Base cost is $25 per kg.
   - **Priority Shipping**: Base cost is $50 per kg.
   - If weight is more than 5 kg, add an additional cost of $50.

## Code Implementation

The function calculates the shipping cost based on the provided rules:

```javascript
function calculateShippingCost(destination, weight, priority) {
    // Validate inputs
    if (destination !== "domestic" && destination !== "international") {
        return "Invalid destination";
    }
    if (weight <= 0 || typeof weight !== 'number') {
        return "Invalid weight";
    }
    if (priority !== "standard" && priority !== "express" && priority !== "priority") {
        return "Invalid priority";
    }

    let baseCost;
    let additionalCost = 0;

    // Calculate base cost and additional cost based on destination and priority
    if (destination === "domestic") {
        if (priority === "standard") {
            baseCost = 5;
        } else if (priority === "express") {
            baseCost = 10;
        } else if (priority === "priority") {
            baseCost = 20;
        }

        // Additional cost for weight over 10 kg
        if (weight > 10) {
            additionalCost = 10;
        }
    } else if (destination === "international") {
        if (priority === "standard") {
            baseCost = 15;
        } else if (priority === "express") {
            baseCost = 25;
        } else if (priority === "priority") {
            baseCost = 50;
        }

        // Additional cost for weight over 5 kg
        if (weight > 5) {
            additionalCost = 50;
        }
    }

    // Calculate total cost
    const totalCost = (baseCost * weight) + additionalCost;
    return totalCost;
}

// Test the function
console.log(calculateShippingCost("domestic", 12, "standard")); // Expected output: 70
console.log(calculateShippingCost("international", 3, "express")); // Expected output: 75
console.log(calculateShippingCost("domestic", 8, "priority")); // Expected output: 160
console.log(calculateShippingCost("international", 6, "priority")); // Expected output: 350
console.log(calculateShippingCost("domestic", -5, "standard")); // Expected output: Invalid weight
console.log(calculateShippingCost("abroad", 5, "standard")); // Expected output: Invalid destination
console.log(calculateShippingCost("international", 5, "overnight")); // Expected output: Invalid priority
