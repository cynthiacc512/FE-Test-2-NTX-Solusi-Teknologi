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
