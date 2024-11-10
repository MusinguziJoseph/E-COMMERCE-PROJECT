
const products = [
    //1.featured section //
    {
        id: 1,
        name: "SnapMaster Pro X3000 digital camera",
        image: "images/cameras/pexels-asphotograpy-96612.jpg",
        description: "Capture every moment in stunning detail with the SnapMaster Pro X3000 digital camera. Equipped with advanced image stabilization and a high-resolution sensor, this camera is perfect for both amateurs and professionals alike.",
        features: ["20MP resolution", "4K video recording", "Optical zoom"],
        price: 390000,
        category: "Cameras"
    },
    {
        id: 2,
        name: "The UltraBook Pro Z15",
        image: "images/laptops/LAPTOP.jpg",
        description: "Dive into the world of high-performance gaming with the Gaming Beast X17. This powerhouse features an AMD Ryzen 9 processor and NVIDIA GeForce RTX 3080 graphics, delivering breathtaking visuals and smooth gameplay even in the most demanding titles. The expansive 17.3-inch Full HD display with a 144Hz refresh rate ensures that every frame is rendered flawlessly, providing an edge in competitive gaming. With customizable RGB lighting and advanced cooling technology, this laptop is designed to keep you in the game for hours on end.",
        features: ["14-inch HD display", "AMD Ryzen 5", "8GB RAM", "256GB SSD"],
        price: 900000,
        category: "Laptops"
    },
    {
        id: 3,
        name: "SmartGlow LED Bulb",
        image: "images/lights/pexels-jayoke-1146562.jpg",
        description: "3.	The Modern Marvel: The Modern Marvel is a sleek and stylish light fixture that blends seamlessly with contemporary interiors. Its minimalist design and energy-efficient LED technology make it a perfect choice for modern homes.",
        features: ["CRI 98+", "Dimmable", "Battery and DC power", "Remote control"],
        price: 90000,
        category: "Lights"
    },
    {
        id: 4,
        name: "Dell XPS 13 ",
        image: "images/laptops/dell 365.jfif",
        description: "The Dell XPS 13 is a premium ultrabook that combines elegance with high performance. With its InfinityEdge display and powerful Intel Core processors, it’s perfect for both work and play.",
        features: ["16GB RAM","512GB SSD","Backlit keyboard","Fingerprint sensor","Battery life up to 12 hours","Windows 10 Pro"],
        price: 1200000,
        category: "Laptops"
    },
    {
        id: 5,
        name: "The CreativePro",
        image: "images/laptops/dell gaming.jfif",
        description: " The CreativePro Studio Laptop is tailored for designers and content creators. With its vibrant display and powerful graphics, it’s perfect for graphic design, video editing, and more..",
        features: ["15.6-inch Full HD display", "Intel i7 processor", "16GB RAM", "512GB SSD"],
        price: 1000000,
        category: "Laptops"
    },
    {
        id: 6,
        name: "ZenPhone 5G Ultra",
        image: "images/phones/itel a60.jfif",
        description: "Experience the future of connectivity with the ZenPhone 5G Ultra. This sleek and powerful device offers blazing-fast 5G speeds, a stunning 120Hz refresh rate display, and a long-lasting battery.",
        features: ["128GB storage", "48MP camera", "6.5-inch display"],
        price: 399000,
        category: "Phons"
    },
    {
        id: 7,
        name: "The itel 15 Pro Max",
        image: "images/phones/itel a05.jfif",
        description: "The ultimate iPhone experience. The itel 15 Pro Max boasts a powerful A17 Bionic chip, a pro-grade camera system, and a durable design..",
        features: ["5.8-inch HD display", "Single 12MP camera", "3G support", "32GB storage"],
        price: 6500000,
        category: "Phones"
    },
    {
        id: 8,
        name: " phone",
        image: "images/phones/itel based1.jfif",
        description: "The Galaxy X Pro 12 combines cutting-edge technology with sleek design. Featuring a vibrant 6.7-inch AMOLED display and powered by the latest Snapdragon 888 processor, this smartphone delivers lightning-fast performance and stunning visuals.",
        features: ["6.1-inch LCD display", "Dual-lens 48MP camera", "4G support", "64GB storage"],
        price: 1100000,
        category: "Phones"
    },
    {
        id: 9,
        name: "Camera",
        image: "images/cameras/pexels-pixabay-51383.jpg",
        description: "The Lumix S5 II is a full-frame mirrorless camera designed for both photographers and videographers. Its impressive image quality, fast autofocus, and versatile video capabilities make it a top choice for professionals and enthusiasts.",
        features: ["24MP resolution", "4K video recording", "ISO 100-51200", "Wi-Fi enabled"],
        price: 170000,
        category: "Cameras"
    },
    {
        id: 10,
        name: "Smart Watch",
        image: "images/smart watches/pexels-alexandr-borecky-128389-393047.jpg",
        description: "The Fitness Fanatic: Designed for the active lifestyle, this smartwatch tracks your heart rate, steps, calories burned, and sleep patterns. It also features GPS for outdoor workouts and is water-resistant for swimming.",
        features: ["24MP resolution", "4K video recording", "ISO 100-51200", "Wi-Fi enabled"],
        price: 150000,
        category: "watches"
    },
    {
        id: 11,
        name: "Smart Watch",
        image: "images/smart watches/pexels-tdcat-437037.jpg",
        description: "The Tech Titan: This smartwatch is packed with the latest technology, including a fast processor, large storage, and a stunning display. It's perfect for those who want a smart device that can do it all.",
        features: ["Heart rate monitor and sleep tracker", "GPS functionality for outdoor activities", "Customizable watch faces", "Water-resistant up to 50 meters"],
        price: 120000,
        category: "watches"
    },
    {
        id: 12,
        name: "Smart watch",
        image: "images/smart watches/smart watch.jfif",
        description: "The Health Haven: Prioritize your well-being with this smartwatch. It monitors your stress levels, blood oxygen levels, and more. It also offers guided breathing exercises to help you relax.",
        features: ["Heart rate monitor and sleep tracker", "GPS functionality for outdoor activities", "Customizable watch faces", "Water-resistant up to 50 meters"],
        price: 250000,
        category: "watches"
    },
    
    
    {
        id: 13,
        name: "Mackbook",
        image: "images/laptops/mackboo.jfif",
        description: "The Apple MacBook Air M2 (2023) redefines the ultraportable laptop experience with its new M2 chip that delivers exceptional performance and efficiency. Its fanless design ensures silent operation while maintaining impressive battery life, making it ideal for both work and play.",
        features: ["Display: 13.6-inch Liquid Retina display with True Tone technology", "o	Processor: Apple M2 chip with an 8-core CPU and up to a 10-core GPU", "RAM: Options of 8GB or upgradeable to 16GB unified memory", "Storage: Starting at 256GB SSD, configurable up to 2TB","Battery Life: Up to 18 hours of web browsing or video playback","o	Operating System: macOS Ventura"],
        price: 3000000,
        category: "Laptops"
    },
    {
        id: 14,
        name: "Smart watch",
        image: "images/smart watches/smartwt.jfif",
        description: "The Gamer's Gadget: This smartwatch is for gamers who want to stay connected and competitive. It features notifications for gaming apps, custom watch faces, and even gaming-specific features.",
        features: ["Heart rate monitor and sleep tracker", "GPS functionality for outdoor activities", "Customizable watch faces", "Water-resistant up to 50 meters"],
        price: 250000,
        category: "watches"
    },
    {
        id: 15,
        name: "Camera",
        image: "images/cameras/cct6.jfif",
        description: "The Lumix S5 II is a full-frame mirrorless camera designed for both photographers and videographers. Its impressive image quality, fast autofocus, and versatile video capabilities make it a top choice for professionals and enthusiasts.",
        features: ["24MP resolution", "4K video recording", "ISO 100-51200", "Wi-Fi enabled"],
        price: 250000,
        category: "Cameras"
    },
    
    //2.laptops
    {
        id: 20,
        name: "Laptop",
        image: "images/laptops/Laptop1.jfif",
        description: "Experience the pinnacle of portable computing with the Ultrabook Elite.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 12 hours","Weight: 3.2 lbs"],
        price: 1500000,
        category: "Laptops"
    },
    {
        id: 21,
        name: "Laptop",
        image: "images/laptops/dell 365.jfif",
        description: "The Business Powerhouse.designed to meet the demanding needs of today's business professionals.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 6 hours","Weight: 3.2 lbs"],
        price: 1400000,
        category: "Laptops"
    },
    {
        id: 22,
        name: "Laptop",
        image: "images/laptops/dell gaming.jfif",
        description: "The All-in-One Wonder is a versatile laptop that can handle a wide range of tasks",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 6 hours","Weight: 3.2 lbs"],
        price: 1000000,
        category: "Laptops"
    },
    {
        id: 23,
        name: "Laptop",
        image: "images/laptops/hp.jfif",
        description: "The Dell XPS 13 (2023) is a premium ultrabook designed for professionals and students alike",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 4 hours","Weight: 3.2 lbs"],
        price: 800000,
        category: "Laptops"
    },
    {
        id: 24,
        name: "Laptop",
        image: "images/laptops/LAPTOP.jpg",
        description: "The HP Spectre x360 (2023) is a versatile convertible laptop that combines elegance with functionality.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 4 hours","Weight: 3.2 lbs"],
        price: 1200000,
        category: "Laptops"
    },
    {
        id: 25,
        name: "Laptop",
        image: "images/laptops/galaxy book.jfif",
        description: "The Lenovo ThinkPad X1 Carbon Gen10 is engineered for business professionals who demand reliability and performance in their daily tasks.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 6 hours","Weight: 3.2 lbs"],
        price: 1200000,
        category: "Laptops"
    },
    {
        id: 26,
        name: "Laptop",
        image: "images/laptops/galaxy book series.jfif",
        description: "The Student Laptop Lite is perfect for students seeking a budget-friendly option.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 6 hours","Weight: 3.2 lbs"],
        price:1300000,
        category: "Laptops"
    },
    {
        id: 27,
        name: "Laptop",
        image: "images/laptops/galaxy book1.jfif",
        description: "The Gaming Titan: Dominate the gaming world with the Gaming Titan.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 12 hours","Weight: 3.2 lbs"],
        price: 2000000,
        category: "Laptops"
    },
    {
        id: 28,
        name: "Laptop",
        image: "images/laptops/962 accer.jfif",
        description: "Dive into the world of high-performance gaming with the Gaming Beast X17.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 8 hours","Weight: 3.2 lbs"],
        price: 1400000,
        category: "Laptops"
    },
    {
        id: 29,
        name: "Laptop",
        image: "images/laptops/accer aspire 3.jfif",
        description: "the BusinessMate X1 combines performance and security in a lightweight package.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 12 hours","Weight: 3.2 lbs"],
        price: 2100000,
        category: "Laptops"
    },
    {
        id: 29.9,
        name: "Laptop",
        image: "images/laptops/mackboo.jfif",
        description: "Energy-efficient LED light with high brightness.",
        features: ["Processor: Intel Core i7-1165G7", "RAM: 16GB DDR4", "Storage: 512GB SSD","Battery Life: Up to 8 hours","Weight: 3.2 lbs"],
        price: 2100000,
        category: "Laptops"
    },
    // 3.lights
    {
        id: 40,
        name: "Light",
        image: "images/lights/street light.jfif",
        description: "The Vintage Vibe: Step back in time with the Vintage Vibe. These charming lights evoke a nostalgic feel, adding a touch of elegance to any room",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 1000000,
        category: "Lights"
    },
    {
        id: 49,
        name: "Light",
        image: "images/lights/solar light1.jfif",
        description: "The Modern Marvel: The Modern Marvel is a sleek and stylish light fixture that blends seamlessly with contemporary interiors. Its minimalist design and energy-efficient LED technology make it a perfect choice for modern homes",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 1200000,
        category: "Lights"
    },
    {
        id: 41,
        name: "Light",
        image: "images/lights/street light.jfif",
        description: "The Nature's Glow: Bring the beauty of nature indoors with the Nature's Glow. These unique lights mimic the soft, warm glow of natural light, creating a serene and calming atmosphere",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 500000,
        category: "Lights"
    },
    {
        id: 42,
        name: "Light",
        image: "images/lights/more light.jfif",
        description: "The Party Perfect is a versatile lighting solution that can transform any space into a vibrant party venue. Its colorful LED lights and various lighting modes create a festive and energetic ambiance",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 30000,
        category: "Lights"
    },
    {
        id: 43,
        name: "Light",
        image: "images/lights/pexels-javon-swaby-197616-3279692.jpg",
        description: "The Functional Fantasy is a practical and stylish light that combines form and function. Its adjustable brightness and color temperature settings allow you to create the perfect lighting mood for any occasion",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 200000,
        category: "Lights"
    },
    {
        id: 44,
        name: "Light",
        image: "images/lights/pexels-jayoke-1146562.jpg",
        description: "	The Party Perfect: The Party Perfect is a versatile lighting solution that can transform any space into a vibrant party venue. Its colorful LED lights and various lighting modes create a festive and energetic ambiance.",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 40000,
        category: "Lights"
    },
    {
        id: 45,
        name: "Light",
        image: "images/lights/pexels-joellpaim-2231411.jpg",
        description: "	The Understated Elegance: The Understated Elegance is a sophisticated light fixture that adds a touch of luxury to any room. Its understated design and high-quality materials make it a timeless piece.",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","•	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 30000,
        category: "Lights"
    },
    {
        id: 46,
        name: "Light",
        image: "images/lights/torch.webp",
        description: "The Industrial Chic: The Industrial Chic is a trendy light fixture that adds a torch of urban edge to your home. Its raw materials and exposed hardware create a modern and edgy look.",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 50000,
        category: "Lights"
    },
    {
        id: 47,
        name: "Light",
        image: "images/lights/solar light outdoor.jfif",
        description: "The Solar Symphony: Illuminate your outdoor space with the Solar Symphony. These energy-efficient lights harness the power of the sun, providing a warm and inviting glow without the need for electricity",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","	Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 1500000,
        category: "Lights"
    },
    {
        id: 48,
        name: "Light",
        image: "images/lights/light affordable.jfif",
        description: "The Outdoor Oasis: The Outdoor Oasis is a durable and weather-resistant light that illuminates your outdoor space. Its energy-efficient LED technology and stylish design make it a perfect addition to any garden, patio, or pool area.",
        features: ["Connectivity: Wi-Fi enabled, compatible with Alexa and Google Assistant", "Lifespan: Up to 25,000 hours", "Long lifespan","Energy Consumption: Only consumes 9W","Brightness: Adjustable from warm white (2700K) to cool daylight (6500K)"],
        price: 1300000,
        category: "Lights"
    },
    // 4.cameras
    {
        id: 50,
        name: "Camera",
        image: "images/cameras/pexels-asphotograpy-96612.jpg",
        description: "Capture every moment in stunning detail with the SnapMaster Pro X3000 digital camera. Equipped with advanced image stabilization and a high-resolution sensor, this camera is perfect for both amateurs and professionals alike.",
        features: ["10W", "Cool white", "Long lifespan","20MP Live MOS sensor ","121-point all cross-type phase detection AF system","C4K at up to 30p; Full HD at up to 120p "],
        price: 399000,
        category: "Cameras"
    },
    {
        id: 51,
        name: "Camera",
        image: "images/cameras/pexels-cottonbro-3205735.jpg",
        description: "Step back in time with the Retro Revival. This stylish camera combines classic design with modern technology, offering a unique and nostalgic shooting experience.",
        features: [ "Cool white", "Long lifespan",""],
        features: [ "Cool white", "Long lifespan","Wi-Fi and Bluetooth support ","121-point all cross-type phase detection AF system "],
        price: 800000,
        category: "Cameras"
    },
    {
        id: 52,
        name: "Camera",
        image: "images/cameras/pexels-elmir-jafarov-375483362-15413394.jpg",
        description: "The All-Rounder is a versatile camera that can handle a wide range of photography and videography needs. Its impressive feature set, high-quality images, and affordable price make it a great choice for everyone",
        features: ["New larger sensor capable of capturing higher resolution images ","10W", "Cool white", "Long lifespan",": Improved battery life compared to previous models ",""],
        price: 400000,
        category: "Cameras"
    },
    {
        id: 53,
        name: "Camera",
        image: "images/cameras/pexels-flodahm-1178337.jpg",
        description: "The Visionary: Capture stunning, cinematic footage with the Visionary. Its advanced image stabilization, 4K resolution, and low-light performance will elevate your photography and videography to new heights",
        features: ["Wi-Fi Bluetooth; supports live streaming ","Continuous Shooting Speed ","10W", "Cool white", "Long lifespan"],
        price: 450000,
        category: "Cameras"
    },
    {
        id: 54,
        name: "Camera",
        image: "images/cameras/pexels-fox-58267-225157.jpg",
        description: "The Adventure Companion: Durable, waterproof, and shockproof, the Adventure Companion is built to withstand the elements. Capture breathtaking moments, no matter where your adventures take you",
        features: ["Fast Hybrid AF with over 425 phase-detection points ","Wi-Fi and Bluetooth support ","10W", "Cool white", "Long lifespan"],
        price: 200000,
        category: "Cameras"
    },
    {
        id: 55,
        name: "Camera",
        image: "images/cameras/pexels-gottapics-7848351.jpg",
        description: "The Pocket Powerhouse: Small but mighty, the Pocket Powerhouse packs a punch. Its compact design and impressive features make it the perfect camera for on-the-go photographers and videographers",
        features: ["Wi-Fi and Bluetooth support ","Fast Hybrid AF with Real-time Eye AF for humans and animals ","10W", "Cool white", "Long lifespan"],
        price: 300000,
        category: "Cameras"
    },
    {
        id: 56,
        name: "Camera",
        image: "images/cameras/pexels-jayoke-1146562.jpg",
        description: " The Family Favorite: The Family Favorite is the perfect camera for capturing precious family moments. Its easy-to-use features, high-quality images, and affordable price make it a great choice for everyone",
        features: ["25MP Live MOS sensor ","Contrast-detect AF with Depth from Defocus technology ","10W", "Cool white", "Long lifespan"],
        price: 399000,
        category: "Cameras"
    },
    {
        id: 57,
        name: "Camera",
        image: "images/cameras/cct3.jpg",
        description: " The Wildlife Wonder: The Wildlife Wonder is a powerful camera designed for nature enthusiasts. Its high-speed autofocus, long zoom range, and exceptional image quality allow you to capture stunning wildlife shots",
        features: ["C4K/4K recording at up to 60p/120p ","Wi-Fi, Bluetooth, HDMI Type-A ","10W", "Cool white", "Long lifespan"],
        price: 400000,
        category: "Cameras"
    },
    {
        id: 58,
        name: "Camera",
        image: "images/cameras/cct4.jfif",
        description: " The Street Shooter: The Street Shooter is a discreet and versatile camera that's perfect for capturing candid moments in urban environments. Its fast autofocus, quiet operation, and high-resolution sensor make it a great choice for street photography",
        features: ["20MP Live MOS sensor ","C4K at up to 30p; Full HD at up to 120p ","10W", "Cool white", "Long lifespan"],
        price: 600000,
        category: "Cameras"
    },
    {
        id: 59,
        name: "Camera",
        image: "images/cameras/cc5.jpg",
        description: " The Street Shooter is a discreet and versatile camera that's perfect for capturing candid moments in urban environments. Its fast autofocus, quiet operation, and high-resolution sensor make it a great choice for street photography",
        features: [" New larger sensor capable of capturing higher resolution images ","Improved battery life compared to previous models ","10W", "Cool white", "Long lifespan"],
        price: 1000000,
        category: "Cameras"
    },
    // 5.phones
    {
        id: 60,
        name: "Smart Phone",
        image: "images/phones/i phone 15.jfif",
        description: "The iPhone Zenith Pro is the pinnacle of smartphone innovation. Featuring Apple's A15 Bionic chip, it delivers unmatched speed and efficiency for all your apps and games",
        features: ["Storage Options: 128GB ", "Processor: Qualcomm Snapdragon 888", "•	Battery: 4500mAh with fast charging support","•	Operating System: iOS "],
        price: 1500000,
        category: "Phones"
    },
    {
        id: 61,
        name: "Smart Phone",
        image: "images/phones/i phone 3.avif",
        description: "Experience the future of mobile technology with the Future Phone.",
        features: ["Storage Options:256GB (expandable via microSD)", "Processor: Qualcomm Snapdragon 888", "•	Battery: 4500mAh with fast charging support","•	Operating System: iOS "],
        price: 1100000,
        category: "Phones"
    },
    {
        id: 62,
        name: "Smart Phone",
        image: "images/phones/i phone 4.avif",
        description: "The Business Beast is the ultimate productivity tool. Its long-lasting battery, fast charging, and advanced security features make it the perfect choice for busy professionals",
        features: ["Storage Options: 128GB ", "Processor: Qualcomm Snapdragon 888", "•	Battery: 4500mAh with fast charging support","•	Operating System: iOS "],
        price: 1300000,
        category: "Phones"
    },
    {
        id: 63,
        name: "Smart Phone",
        image: "images/phones/tecno.jfif",
        description: "Capture stunning photos and videos with the Photography Pro. Its high-resolution camera, advanced image processing, and versatile shooting modes elevate your mobile photography.",
        features: ["Storage Options: 256GB ", "Processor: Qualcomm Snapdragon 888", "•	Battery: 4500mAh with fast charging support","•	Operating System: Android "],
        price: 2000000,
        category: "Phones"
    },
    {
        id: 64,
        name: "Smart Phone",
        image: "images/phones/i phone.jfif",
        description: "The Budget Buddy offers incredible value for money. Its sleek design, smooth performance, and essential features make it a great choice for budget-conscious consumers.",
        features: ["Storage Options: 128GB ", "Processor: Qualcomm Snapdragon 888", "•	Battery: 4500mAh with fast charging support","Operating System: iOS "],
        price: 2000000,
        category: "Phones"
    },
    {
        id: 65,
        name: "Smart Phone",
        image: "images/phones/samsung2.jpg",
        description: "The Fashion Forward is a stylish and sophisticated smartphone. Its sleek design, vibrant colors, and advanced features make it a statement piece.",
        features: ["256GB internal storage (no microSD slot)", "Dual rear cameras (50MP + 12MP) with advanced night mode","10MP front camera with portrait mode","4500mAh battery with wireless charging support","Android 14 with regular updates"],
        price: 200000,
        category: "Phones"
    },
    {
        id: 66,
        name: "Smart Phone",
        image: "images/phones/itel a05.jfif",
        description: "The Security Sentinel prioritizes your privacy and security. Its advanced biometric authentication, secure encryption, and regular software updates protect your sensitive information.",
        features: ["256GB internal storage ", "Dual rear cameras (50MP + 12MP) with advanced night mode","10MP front camera with portrait mode","4500mAh battery with wireless charging support","Android 14 with regular updates"],
        price: 400000,
        category: "Phones"
    },
    {
        id: 67,
        name: "Smart Phone",
        image: "images/phones/samsung1.jpg",
        description: "The All-Rounder Ace is a versatile smartphone that excels in every category. Its balanced performance, stunning display, and impressive camera system make it a great choice for everyone.",
        features: ["256GB internal storage (no microSD slot)", "Dual rear cameras (50MP + 12MP) with advanced night mode","10MP front camera with portrait mode","4500mAh battery with wireless charging support","Android 14 with regular updates"],
        price: 500000,
        category: "Phones"
    },
    {
        id: 68,
        name: "Smart Phone",
        image: "images/phones/itel based1.jfif",
        description: "the Fashion Forward is a stylish and sophisticated smartphone. Its sleek design, vibrant colors, and advanced features make it a statement piece.",
        features: ["64GB ", "Dual rear cameras (50MP + 12MP) with advanced night mode","10MP front camera with portrait mode","4500mAh battery with wireless charging support","Android 14 with regular updates"],
        price: 600000,
        category: "Phones"
    },
    {
        id: 69,
        name: "Smart Phone",
        image: "images/phones/smartphone-153650_1280.png",
        description: "The Galaxy Nova 12 redefines what a smartphone can do. With its stunning 6.7-inch AMOLED display, every image and video comes to life with vibrant colors and deep contrasts",
        features: ["32GB internal storage ", "Dual rear cameras (50MP + 12MP) with advanced night mode","10MP front camera with portrait mode","4500mAh battery with wireless charging support","Android 14 with regular updates"],
        price:600000,
        category: "Phones"
    }



];

// Function to get product ID from URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Load product details based on the ID in the URL
function loadProductDetails() {
    const productId = getProductId();
    const product = products.find(p => p.id === productId);

    if (product) {
        // Set product details
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-image").alt = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = `UGX ${product.price.toFixed(0)}`;

        // Load features
        const featuresList = document.getElementById("product-features");
        featuresList.innerHTML = "";
        product.features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Load related products
        loadRelatedProducts(product.category, product.id);
    } else {
        console.log("Product not found for ID:", productId);
    }
}

// Function to add the product to the cart with the image included
function addToCart() {
    const productId = getProductId();
    const product = products.find(p => p.id === productId);

    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Added to cart successfully.");
    } else {
        console.log("Error: Product not found when trying to add to cart.");
    }
}

// Function to update the cart count on the cart icon
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = cartCount;
}

// Function to load related products based on category
function loadRelatedProducts(category, currentProductId) {
    const relatedContainer = document.getElementById("related-products");
    relatedContainer.innerHTML = "";

    const relatedProducts = products.filter(p => p.category === category && p.id !== currentProductId);

    relatedProducts.forEach(related => {
        const relatedItem = document.createElement("div");
        relatedItem.className = "related-item";
        relatedItem.innerHTML = `
            <a href="product.html?id=${related.id}">
                <img src="${related.image}" alt="${related.name}" style="width: 100px; height: auto;">
                <p>${related.name}</p>
                <p>UGX${related.price.toFixed(2)}</p>
            </a>
        `;
        relatedContainer.appendChild(relatedItem);
    });
}

// Initialize cart count on page load
updateCartCount();

// Load product details on page load
window.onload = () => {
    loadProductDetails();
    updateCartCount();
};
