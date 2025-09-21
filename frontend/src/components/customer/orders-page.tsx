import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { 
  ArrowLeft,
  Search,
  Filter,
  Package,
  Truck,
  CheckCircle,
  Clock,
  RotateCcw,
  Download,
  Star,
  MessageCircle,
  Calendar,
  MapPin,
  User
} from 'lucide-react'
import { useRouter } from '../router'
import NavigationHeader from '../navigation-header'
import Footer from '../footer'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function OrdersPage() {
  const { goBack, navigate } = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const orders = [
    {
      id: 'ORD-12345',
      date: '2024-01-15',
      status: 'Delivered',
      total: 2750,
      items: 2,
      artisan: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      estimatedDelivery: '2024-01-20',
      actualDelivery: '2024-01-19',
      image: 'https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=400',
      products: [
        { name: 'Handwoven Silk Saree', price: 1800, quantity: 1 },
        { name: 'Traditional Blouse', price: 950, quantity: 1 }
      ]
    },
    {
      id: 'ORD-12344',
      date: '2024-01-10',
      status: 'In Transit',
      total: 1850,
      items: 1,
      artisan: 'Rajesh Kumar',
      location: 'Jaipur, Rajasthan',
      estimatedDelivery: '2024-01-18',
      image: 'https://images.unsplash.com/photo-1716876995651-1ff85b65a6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHBvdHRlcnklMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMHww&ixlib=rb-4.1.0&q=80&w=400',
      products: [
        { name: 'Blue Pottery Vase Set', price: 1850, quantity: 1 }
      ]
    },
    {
      id: 'ORD-12343',
      date: '2024-01-05',
      status: 'Processing',
      total: 975,
      items: 1,
      artisan: 'Meera Patel',
      location: 'Kutch, Gujarat',
      estimatedDelivery: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1653227907864-560dce4c252d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnRzfGVufDF8fHx8MTc1ODM2NjIwNXww&ixlib=rb-4.1.0&q=80&w=400',
      products: [
        { name: 'Silver Filigree Earrings', price: 975, quantity: 1 }
      ]
    },
    {
      id: 'ORD-12342',
      date: '2023-12-28',
      status: 'Cancelled',
      total: 1200,
      items: 1,
      artisan: 'Sunita Devi',
      location: 'Patna, Bihar',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYWludGluZ3MlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzNjYyMTB8MA&ixlib=rb-4.1.0&q=80&w=400',
      products: [
        { name: 'Madhubani Painting', price: 1200, quantity: 1 }
      ]
    },
    {
      id: 'ORD-12341',
      date: '2023-12-20',
      status: 'Delivered',
      total: 3200,
      items: 3,
      artisan: 'Krishna Murthy',
      location: 'Mysore, Karnataka',
      estimatedDelivery: '2023-12-28',
      actualDelivery: '2023-12-27',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMHdlYXZpbmclMjBhcnRpc2FufGVufDF8fHx8MTc1ODM2NjIwMnww&ixlib=rb-4.1.0&q=80&w=400',
      products: [
        { name: 'Mysore Silk Dupatta', price: 1500, quantity: 1 },
        { name: 'Sandalwood Figurine', price: 850, quantity: 1 },
        { name: 'Traditional Lamp', price: 850, quantity: 1 }
      ]
    }
  ]

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase()
    
    return matchesSearch && matchesStatus
  })

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'amount-high':
        return b.total - a.total
      case 'amount-low':
        return a.total - b.total
      default:
        return 0
    }
  })

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />
      case 'in transit':
        return <Truck className="h-4 w-4" />
      case 'processing':
        return <Package className="h-4 w-4" />
      case 'cancelled':
        return <RotateCcw className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-700'
      case 'in transit':
        return 'bg-blue-100 text-blue-700'
      case 'processing':
        return 'bg-yellow-100 text-yellow-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const ordersByStatus = {
    all: orders.length,
    delivered: orders.filter(o => o.status.toLowerCase() === 'delivered').length,
    'in transit': orders.filter(o => o.status.toLowerCase() === 'in transit').length,
    processing: orders.filter(o => o.status.toLowerCase() === 'processing').length,
    cancelled: orders.filter(o => o.status.toLowerCase() === 'cancelled').length
  }

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
              My Orders
            </h1>
            <p className="text-muted-foreground">
              Track and manage all your orders
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold text-primary">{ordersByStatus.all}</h3>
              <p className="text-sm text-muted-foreground">Total Orders</p>
            </CardContent>
          </Card>
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold text-green-600">{ordersByStatus.delivered}</h3>
              <p className="text-sm text-muted-foreground">Delivered</p>
            </CardContent>
          </Card>
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold text-blue-600">{ordersByStatus['in transit']}</h3>
              <p className="text-sm text-muted-foreground">In Transit</p>
            </CardContent>
          </Card>
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold text-yellow-600">{ordersByStatus.processing}</h3>
              <p className="text-sm text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold text-red-600">{ordersByStatus.cancelled}</h3>
              <p className="text-sm text-muted-foreground">Cancelled</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-input-background border-primary/20"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-input-background border-primary/20">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="in transit">In Transit</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-input-background border-primary/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="amount-high">Highest Amount</SelectItem>
                  <SelectItem value="amount-low">Lowest Amount</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="bg-card/60 border-primary/20">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {sortedOrders.map((order) => (
            <Card key={order.id} className="border-0 bg-card/60 backdrop-blur-sm card-shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Order Image and Basic Info */}
                  <div className="flex items-center space-x-4">
                    <ImageWithFallback
                      src={order.image}
                      alt="Order item"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Artisan Info */}
                  <div>
                    <h4 className="font-medium mb-1">Artisan</h4>
                    <div className="flex items-center space-x-2 mb-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{order.artisan}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{order.location}</span>
                    </div>
                  </div>

                  {/* Status and Delivery */}
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge className={`${getStatusColor(order.status)} mb-2`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{order.status}</span>
                    </Badge>
                    {order.estimatedDelivery && (
                      <p className="text-sm text-muted-foreground">
                        {order.status === 'Delivered' && order.actualDelivery ? 
                          `Delivered on ${new Date(order.actualDelivery).toLocaleDateString()}` :
                          `Expected by ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                        }
                      </p>
                    )}
                  </div>

                  {/* Total and Actions */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium mb-1">Total</h4>
                      <p className="text-2xl font-bold text-primary">₹{order.total}</p>
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                      <Button 
                        size="sm" 
                        onClick={() => navigate('order-tracking', { orderId: order.id })}
                        className="w-full"
                      >
                        <Package className="h-4 w-4 mr-1" />
                        Track Order
                      </Button>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        {order.status === 'Delivered' && (
                          <Button variant="outline" size="sm" className="flex-1">
                            <Star className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items Details */}
                <div className="mt-4 pt-4 border-t border-border/60">
                  <h4 className="font-medium mb-2">Order Items:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {order.products.map((product, index) => (
                      <div key={index} className="text-sm bg-secondary/20 p-2 rounded">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-muted-foreground"> × {product.quantity}</span>
                        <span className="float-right">₹{product.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedOrders.length === 0 && (
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-lg font-semibold mb-2">No orders found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'You haven\'t placed any orders yet'
                }
              </p>
              <Button onClick={() => navigate('explore')}>
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}