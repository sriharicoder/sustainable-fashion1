// Cloth Data with usage limits and suggestions for reuse
const clothesData = {
    cotton: {
        timesLimit: 30,
        daysLimit: 180,
        timesUsed: 0,
        daysUsed: 0,
        reuse: "Use for creating DIY tote bags, rags, or patchwork quilts."
    },
    silk: {
        timesLimit: 20,
        daysLimit: 120,
        timesUsed: 0,
        daysUsed: 0,
        reuse: "Use for scarves, pillow covers, or decorative art pieces."
    },
    polyester: {
        timesLimit: 50,
        daysLimit: 365,
        timesUsed: 0,
        daysUsed: 0,
        reuse: "Recycle into insulation, carpets, or reusable bags."
    },
	nylon: {
		timeslimit: 60,
		daysLimit: 365,
        timesUsed: 0,
        daysUsed: 0,
		reuse: "Recycle into Eco-Friendly Bags, Swimwear, Luggage."
	}
};

// Display cloth details and manage usage limits
function showClothDetails(type) {
    const cloth = clothesData[type];
    
    cloth.timesUsed++;
    cloth.daysUsed++;

    // Check if usage limits are exceeded
    const usageExceeded = cloth.timesUsed > cloth.timesLimit || cloth.daysUsed > cloth.daysLimit;

    let usageInfo = `This ${type} cloth has been used ${cloth.timesUsed} times and for ${cloth.daysUsed} days.`;
    if (usageExceeded) {
        usageInfo += ` <strong>Usage limit exceeded!</strong>`;
    } else {
        usageInfo += ` You can use it ${cloth.timesLimit - cloth.timesUsed} more times and for ${cloth.daysLimit - cloth.daysUsed} more days.`;
    }

    const reuseSuggestions = usageExceeded ? cloth.reuse : '';

    // Update HTML
    document.getElementById('cloth-title').innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} Clothes`;
    document.getElementById('usage-info').innerHTML = usageInfo;
    document.getElementById('reuse-suggestions').innerText = reuseSuggestions;
}
