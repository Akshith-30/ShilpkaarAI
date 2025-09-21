import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Separator } from '../ui/separator'
import { 
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Star,
  MapPin,
  Shield,
  Truck,
  RotateCcw,
  Phone,
  MessageCircle,
  Eye,
  ThumbsUp,
  Award,
  Verified,
  Calendar,
  Package,
  Zap,
  Users,
  Clock
} from 'lucide-react'
import { useRouter } from '../router'
import { useCart } from '../cart/cart-context'
import NavigationHeader from '../navigation-header'
import Footer from '../footer'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function ProductDetail() {
  const { goBack, navigate } = useRouter()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock product data - in real app this would come from props or API
  const product = {
    id: '1',
    name: 'Handwoven Banarasi Silk Saree',
    price: 2500,
    originalPrice: 3200,
    discount: 22,
    rating: 4.8,
    reviews: 47,
    sold: 234,
    inStock: true,
    stockCount: 3,
    category: 'Textiles',
    tags: ['Handwoven', 'Pure Silk', 'Traditional', 'Wedding'],
    images: [
      'https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=600',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=600',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYWludGluZ3MlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzNjYyMTB8MA&ixlib=rb-4.1.0&q=80&w=600'
    ],
    description: 'This exquisite Banarasi silk saree represents centuries of traditional Indian craftsmanship passed down through generations. Each piece is meticulously handwoven using time-honored techniques that have been refined over decades. The intricate details showcase the artisan\'s deep understanding of cultural motifs and patterns, creating a piece that is not just beautiful but carries the soul of Indian heritage.',
    specifications: {
      'Material': 'Pure Silk',
      'Weave': 'Handwoven',
      'Origin': 'Varanasi, Uttar Pradesh',
      'Care': 'Dry clean only',
      'Dimensions': '5.5 meters length',
      'Weight': '450 grams',
      'Border': 'Zari work',
      'Blouse': 'Unstitched'
    },
    artisan: {
      id: 'art1',
      name: 'Priya Sharma',
      location: 'Varanasi, Uttar Pradesh',
      experience: '15 years',
      rating: 4.9,
      verified: true,
      speciality: 'Banarasi Silk Weaving',
      totalProducts: 47,
      reviews: 234,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGFydGlzYW58ZW58MXx8fHwxNzU4MzY2MjA3fDA&ixlib=rb-4.1.0&q=80&w=150',
      description: 'Master artisan specializing in traditional Banarasi silk weaving with over 15 years of experience.'
    },
    shipping: {
      estimatedDays: '7-10 business days',
      freeShipping: true,
      returnPolicy: '15 days return',
      warranty: '6 months craftsmanship guarantee'
    },
    features: [
      'Handwoven by master artisan',
      'Pure silk with gold zari work',
      'Traditional Banarasi patterns',
      'Suitable for weddings and festivals',
      'Comes with authenticity certificate',
      'UNESCO recognized craft technique'
    ]
  }

  const reviews = [
    {
      id: 1,
      user: 'Anita Desai',
      rating: 5,
      date: '2024-01-10',
      comment: 'Absolutely beautiful saree! The quality is exceptional and the craftsmanship is evident in every detail. Perfect for my daughter\'s wedding.',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      user: 'Rashmi Patel',
      rating: 5,
      date: '2024-01-05',
      comment: 'Stunning piece! The colors are vibrant and the silk feels luxurious. Priya is such a talented artisan. Highly recommended!',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      user: 'Meera Singh',
      rating: 4,
      date: '2023-12-28',
      comment: 'Beautiful saree with intricate work. Delivery was on time and packaging was excellent. Only minor issue was the blouse piece could be longer.',
      helpful: 5,
      verified: false
    }
  ]

  const relatedProducts = [
    {
      id: '2',
      name: 'Traditional Silk Dupatta',
      price: 850,
      rating: 4.6,
      artisan: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=300'
    },
    {
      id: '3',
      name: 'Embroidered Blouse Piece',
      price: 450,
      rating: 4.7,
      artisan: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=300'
    }
  ]

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      artisan: product.artisan.name,
      artisanId: product.artisan.id
    })
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('cart')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 botanical-pattern">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <button onClick={goBack} className="hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span>/</span>
          <button onClick={() => navigate('categories')} className="hover:text-primary">
            Categories
          </button>
          <span>/</span>
          <button onClick={() => navigate('categories')} className="hover:text-primary">
            {product.category}
          </button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                  {product.discount && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      {product.discount}% OFF
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-4 right-4 bg-white/90 hover:bg-white ${
                      isFavorite ? 'text-red-500' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <Badge variant="outline">
                  {product.sold} sold
                </Badge>
                <Badge className="bg-green-100 text-green-700">
                  <Eye className="h-3 w-3 mr-1" />
                  {Math.floor(Math.random() * 50) + 20} viewing
                </Badge>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Artisan Info */}
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={product.artisan.avatar} alt={product.artisan.name} />
                    <AvatarFallback>{product.artisan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{product.artisan.name}</h3>
                      {product.artisan.verified && (
                        <Verified className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{product.artisan.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{product.artisan.rating}</span>
                      </div>
                      <span className="text-muted-foreground">{product.artisan.experience}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                  >
                    +
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Only {product.stockCount} left in stock
                </span>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleBuyNow}>
                  <Zap className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Shipping & Returns */}
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      Delivery in {product.shipping.estimatedDays}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{product.shipping.returnPolicy}</p>
                    <p className="text-sm text-muted-foreground">Easy returns and exchanges</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">{product.shipping.warranty}</p>
                    <p className="text-sm text-muted-foreground">Quality assurance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-secondary/40 border border-primary/10">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
                <TabsTrigger value="artisan">Artisan Story</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="flex items-center space-x-8 p-4 bg-secondary/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{product.rating}</div>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{product.reviews} reviews</div>
                    </div>
                    <Separator orientation="vertical" className="h-16" />
                    <div className="flex-1">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map(stars => (
                          <div key={stars} className="flex items-center space-x-2">
                            <span className="text-sm w-8">{stars}★</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400"
                                style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : 3}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground w-8">
                              {stars === 5 ? 33 : stars === 4 ? 9 : stars === 3 ? 2 : stars === 2 ? 2 : 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-secondary/20 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{review.user[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium">{review.user}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                  <Package className="h-3 w-3 mr-1" />
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="artisan" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={product.artisan.avatar} alt={product.artisan.name} />
                      <AvatarFallback>{product.artisan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{product.artisan.name}</h3>
                      <p className="text-muted-foreground">{product.artisan.speciality}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{product.artisan.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{product.artisan.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="text-center p-4">
                      <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{product.artisan.totalProducts}</div>
                      <div className="text-sm text-muted-foreground">Products</div>
                    </Card>
                    <Card className="text-center p-4">
                      <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{product.artisan.reviews}</div>
                      <div className="text-sm text-muted-foreground">Reviews</div>
                    </Card>
                    <Card className="text-center p-4">
                      <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{product.artisan.experience}</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </Card>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {product.artisan.description}
                  </p>

                  <div className="flex space-x-3">
                    <Button onClick={() => navigate('artisan-profile', { id: product.artisan.id })}>
                      View Artisan Profile
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Artisan
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
          <CardHeader>
            <CardTitle>More from this Artisan</CardTitle>
            <CardDescription>Other products by {product.artisan.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Card key={item.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                      onClick={() => navigate('product-detail', { id: item.id })}
                    />
                    <div className="p-4">
                      <h4 className="font-medium mb-2">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">₹{item.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}