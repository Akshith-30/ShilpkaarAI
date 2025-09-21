import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { 
  ArrowLeft,
  Search,
  Heart,
  ShoppingCart,
  Filter,
  Grid3X3,
  List,
  Star,
  MapPin,
  User,
  Share2,
  MessageCircle,
  Eye,
  Trash2
} from 'lucide-react'
import { useRouter } from '../router'
import { useCart } from '../cart/cart-context'
import NavigationHeader from '../navigation-header'
import Footer from '../footer'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function FavoritesPage() {
  const { goBack, navigate } = useRouter()
  const { addToCart } = useCart()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Silver Filigree Earrings',
      price: 750,
      originalPrice: 900,
      discount: 17,
      artisan: 'Meera Patel',
      location: 'Kutch, Gujarat',
      rating: 4.8,
      reviews: 24,
      category: 'Jewelry',
      addedDate: '2024-01-10',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1653227907864-560dce4c252d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnRzfGVufDF8fHx8MTc1ODM2NjIwNXww&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Exquisite handcrafted silver filigree earrings with traditional Kutchi patterns.'
    },
    {
      id: '2',
      name: 'Madhubani Painting',
      price: 1200,
      originalPrice: 1200,
      artisan: 'Sunita Devi',
      location: 'Patna, Bihar',
      rating: 4.9,
      reviews: 18,
      category: 'Art',
      addedDate: '2024-01-08',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYWludGluZ3MlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzNjYyMTB8MA&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Traditional Madhubani painting depicting mythological scenes with natural colors.'
    },
    {
      id: '3',
      name: 'Handwoven Khadi Scarf',
      price: 450,
      originalPrice: 600,
      discount: 25,
      artisan: 'Ravi Sharma',
      location: 'Ahmednagar, Maharashtra',
      rating: 4.6,
      reviews: 32,
      category: 'Textiles',
      addedDate: '2024-01-05',
      inStock: false,
      image: 'https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Pure khadi scarf handwoven with organic cotton and natural dyes.'
    },
    {
      id: '4',
      name: 'Brass Oil Lamp Set',
      price: 890,
      originalPrice: 890,
      artisan: 'Krishna Murthy',
      location: 'Mysore, Karnataka',
      rating: 4.7,
      reviews: 15,
      category: 'Home Decor',
      addedDate: '2024-01-03',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Traditional brass oil lamps with intricate carvings, perfect for festivals.'
    },
    {
      id: '5',
      name: 'Blue Pottery Dinner Set',
      price: 2200,
      originalPrice: 2500,
      discount: 12,
      artisan: 'Rajesh Kumar',
      location: 'Jaipur, Rajasthan',
      rating: 4.9,
      reviews: 28,
      category: 'Pottery',
      addedDate: '2023-12-28',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1716876995651-1ff85b65a6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHBvdHRlcnklMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMHww&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Elegant blue pottery dinner set with traditional Jaipur craftsmanship.'
    },
    {
      id: '6',
      name: 'Wooden Chess Set',
      price: 1650,
      originalPrice: 1650,
      artisan: 'Arjun Singh',
      location: 'Saharanpur, Uttar Pradesh',
      rating: 4.8,
      reviews: 21,
      category: 'Games',
      addedDate: '2023-12-25',
      inStock: true,
      image: 'https://images.unsplash.com/photo-1583846112692-b38c13a6ac0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBjcmFmdHMlMjBoYW5kaWNyYWZ0c3xlbnwxfHx8fDE3NTgzNjYyMDd8MA&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Handcrafted wooden chess set with detailed carvings and smooth finish.'
    }
  ])

  const filteredFavorites = favorites.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = categoryFilter === 'all' || item.category.toLowerCase() === categoryFilter.toLowerCase()
    
    return matchesSearch && matchesCategory
  })

  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      case 'oldest':
        return new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime()
      case 'price-high':
        return b.price - a.price
      case 'price-low':
        return a.price - b.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const categories = ['all', ...Array.from(new Set(favorites.map(item => item.category.toLowerCase())))]

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id))
  }

  const addToCartHandler = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      artisan: item.artisan,
      artisanId: item.artisan // Assuming artisanId is needed
    })
  }

  const FavoriteCard = ({ item, isListView = false }: { item: any, isListView?: boolean }) => (
    <Card className={`border-0 bg-card/60 backdrop-blur-sm card-shadow hover:shadow-lg transition-all group ${
      isListView ? 'h-auto' : 'h-full'
    }`}>
      <div className={`${isListView ? 'flex' : 'block'} h-full`}>
        {/* Image */}
        <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : 'w-full'}`}>
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className={`object-cover cursor-pointer ${
              isListView ? 'h-32 w-full' : 'h-48 w-full'
            } rounded-t-lg ${isListView ? 'rounded-l-lg rounded-tr-none' : ''}`}
            onClick={() => navigate('product-detail', { id: item.id })}
          />
          {item.discount && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              {item.discount}% OFF
            </Badge>
          )}
          {!item.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                Out of Stock
              </Badge>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/90 hover:bg-white text-red-500 hover:text-red-600"
            onClick={() => removeFavorite(item.id)}
          >
            <Heart className="h-4 w-4 fill-current" />
          </Button>
        </div>

        {/* Content */}
        <div className={`p-4 flex flex-col ${isListView ? 'flex-1' : 'flex-grow'}`}>
          <div className="flex-grow">
            <h3 
              className="font-semibold mb-2 line-clamp-2 cursor-pointer hover:text-primary"
              onClick={() => navigate('product-detail', { id: item.id })}
            >
              {item.name}
            </h3>
            
            <div className="flex items-center space-x-1 mb-2">
              <User className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{item.artisan}</span>
            </div>
            
            <div className="flex items-center space-x-1 mb-2">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{item.location}</span>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">{item.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({item.reviews} reviews)</span>
              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
            </div>

            {isListView && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>

          <div className="mt-auto">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-lg font-bold text-primary">₹{item.price}</span>
              {item.originalPrice > item.price && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>

            <div className={`flex gap-2 ${isListView ? 'flex-row' : 'flex-col'}`}>
              <Button 
                className={`${isListView ? 'flex-1' : 'w-full'}`}
                onClick={() => addToCartHandler(item)}
                disabled={!item.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {item.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <div className={`flex gap-2 ${isListView ? '' : 'w-full'}`}>
                <Button 
                  variant="outline" 
                  size={isListView ? 'default' : 'sm'}
                  className={isListView ? '' : 'flex-1'}
                  onClick={() => navigate('product-detail', { id: item.id })}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size={isListView ? 'default' : 'sm'}
                  className={isListView ? '' : 'flex-1'}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size={isListView ? 'default' : 'sm'}
                  className={isListView ? '' : 'flex-1'}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 botanical-pattern">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="ghost" size="icon" onClick={goBack} className="hover:bg-card/60">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              My Favorites
            </h1>
            <p className="text-muted-foreground">
              {favorites.length} item{favorites.length !== 1 ? 's' : ''} saved
            </p>
          </div>
        </div>

        {/* Controls */}
        <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search favorites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-input-background border-primary/20"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="bg-input-background border-primary/20">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-input-background border-primary/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently Added</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="bg-card/60 border-primary/20"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="bg-card/60 border-primary/20"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Favorites Grid/List */}
        {sortedFavorites.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {sortedFavorites.map((item) => (
              <FavoriteCard 
                key={item.id} 
                item={item} 
                isListView={viewMode === 'list'} 
              />
            ))}
          </div>
        ) : (
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-lg font-semibold mb-2">No favorites found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || categoryFilter !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Start exploring and save items you love'
                }
              </p>
              <Button onClick={() => navigate('explore')}>
                <Heart className="h-4 w-4 mr-2" />
                Discover Products
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        {sortedFavorites.length > 0 && (
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow mt-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold mb-1">Quick Actions</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage all your favorites at once
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const inStockItems = sortedFavorites.filter(item => item.inStock)
                      inStockItems.forEach(item => addToCartHandler(item))
                    }}
                    disabled={sortedFavorites.filter(item => item.inStock).length === 0}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add All to Cart
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share List
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-destructive hover:text-destructive"
                    onClick={() => setFavorites([])}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}