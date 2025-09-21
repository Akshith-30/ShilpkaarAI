const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Product = require('./models/Product');

const sampleUsers = [
  {
    name: 'Priya Sharma',
    mobile: '9876543210',
    password: 'password123',
    role: 'artisan',
    email: 'priya@example.com',
    location: 'Varanasi, Uttar Pradesh',
    craft: 'Textile Weaving',
    experience: 15,
    isVerified: true
  },
  {
    name: 'Rajesh Kumar',
    mobile: '9876543211',
    password: 'password123',
    role: 'artisan',
    email: 'rajesh@example.com',
    location: 'Jaipur, Rajasthan',
    craft: 'Blue Pottery',
    experience: 12,
    isVerified: true
  },
  {
    name: 'Meera Patel',
    mobile: '9876543212',
    password: 'password123',
    role: 'artisan',
    email: 'meera@example.com',
    location: 'Surat, Gujarat',
    craft: 'Jewelry Making',
    experience: 8,
    isVerified: true
  },
  {
    name: 'Amit Singh',
    mobile: '9876543213',
    password: 'password123',
    role: 'customer',
    email: 'amit@example.com',
    location: 'Mumbai, Maharashtra'
  },
  {
    name: 'Sneha Reddy',
    mobile: '9876543214',
    password: 'password123',
    role: 'customer',
    email: 'sneha@example.com',
    location: 'Bangalore, Karnataka'
  }
];

const sampleProducts = [
  {
    name: 'Handwoven Banarasi Silk Saree',
    description: 'Exquisite handwoven Banarasi silk saree with intricate zari work. Made with pure silk threads and traditional weaving techniques passed down through generations.',
    price: 2500,
    originalPrice: 3200,
    images: [
      'https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    category: 'Textiles',
    stock: 5,
    tags: ['silk', 'handwoven', 'traditional', 'zari'],
    materials: ['Pure Silk', 'Zari Thread', 'Gold Thread']
  },
  {
    name: 'Blue Pottery Dinner Set',
    description: 'Beautiful blue pottery dinner set with traditional Jaipur blue glaze. Each piece is handcrafted and painted with intricate patterns.',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1716876995651-1ff85b65a6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHBvdHRlcnklMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMHww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    category: 'Pottery',
    stock: 3,
    tags: ['blue pottery', 'dinner set', 'traditional', 'handcrafted'],
    materials: ['Clay', 'Blue Glaze', 'Traditional Pigments']
  },
  {
    name: 'Silver Filigree Earrings',
    description: 'Delicate silver filigree earrings with intricate wirework. Handcrafted using traditional techniques with attention to detail.',
    price: 750,
    originalPrice: 950,
    images: [
      'https://images.unsplash.com/photo-1653227907864-560dce4c252d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnRzfGVufDF8fHx8MTc1ODM2NjIwNXww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    category: 'Jewelry',
    stock: 8,
    tags: ['silver', 'filigree', 'earrings', 'handcrafted'],
    materials: ['Sterling Silver', 'Traditional Wire']
  },
  {
    name: 'Wooden Hand Carved Bowl Set',
    description: 'Set of three hand-carved wooden bowls made from sustainable teak wood. Each bowl features unique grain patterns and smooth finish.',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib3dsJTIwaGFuZGNyYWZ0fGVufDF8fHx8MTc1ODM2NjIwN3ww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    category: 'Woodwork',
    stock: 4,
    tags: ['wooden', 'hand carved', 'bowl set', 'sustainable'],
    materials: ['Teak Wood', 'Natural Finish']
  },
  {
    name: 'Handwoven Cotton Kurta',
    description: 'Comfortable handwoven cotton kurta with traditional block printing. Perfect for casual wear with authentic Indian craftsmanship.',
    price: 800,
    originalPrice: 1000,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJ0YSUyMGhhbmRjcmFmdHxlbnwxfHx8fDE3NTgzNjYyMDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    category: 'Clothing',
    stock: 6,
    tags: ['cotton', 'handwoven', 'kurta', 'block print'],
    materials: ['Pure Cotton', 'Natural Dyes', 'Block Print']
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shilpkaarai');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create users
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
      console.log(`👤 Created user: ${user.name} (${user.role})`);
    }

    // Create products
    const artisans = createdUsers.filter(user => user.role === 'artisan');
    for (let i = 0; i < sampleProducts.length; i++) {
      const productData = sampleProducts[i];
      const artisan = artisans[i % artisans.length]; // Distribute products among artisans
      
      const product = new Product({
        ...productData,
        artisan: artisan._id,
        artisanName: artisan.name
      });
      
      await product.save();
      console.log(`🛍️ Created product: ${product.name} by ${artisan.name}`);
    }

    console.log('🎉 Database seeded successfully!');
    console.log('\n📋 Sample Accounts:');
    console.log('Artisans:');
    artisans.forEach(artisan => {
      console.log(`  - ${artisan.name}: ${artisan.mobile} / password123`);
    });
    
    const customers = createdUsers.filter(user => user.role === 'customer');
    console.log('Customers:');
    customers.forEach(customer => {
      console.log(`  - ${customer.name}: ${customer.mobile} / password123`);
    });

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

seedDatabase();
