import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { 
  ArrowLeft,
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  Calendar,
  Eye,
  Heart,
  Star,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Clock,
  Filter,
  Download,
  Bell,
  Lightbulb,
  Target,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { useRouter } from '../router'
import { useAuth } from '../auth/auth-context'
import NavigationHeader from '../navigation-header'
import Footer from '../footer'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function ArtisanAnalytics() {
  const { navigate, goBack } = useRouter()
  const { user } = useAuth()
  const [timeFrame, setTimeFrame] = useState('30days')

  // Mock analytics data
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 23, revenue: 45000 },
    { month: 'Feb', sales: 52000, orders: 29, revenue: 52000 },
    { month: 'Mar', sales: 48000, orders: 26, revenue: 48000 },
    { month: 'Apr', sales: 61000, orders: 34, revenue: 61000 },
    { month: 'May', sales: 55000, orders: 31, revenue: 55000 },
    { month: 'Jun', sales: 67000, orders: 38, revenue: 67000 }
  ]

  const topProducts = [
    {
      id: '1',
      name: 'Handwoven Banarasi Silk Saree',
      sales: 1250000,
      orders: 28,
      growth: 15.3,
      image: 'https://images.unsplash.com/photo-1632726733402-4a059a476028?w=100&h=100&fit=crop',
      category: 'Textiles'
    },
    {
      id: '2',
      name: 'Silver Filigree Earrings',
      sales: 845000,
      orders: 45,
      growth: 8.7,
      image: 'https://images.unsplash.com/photo-1653227907864-560dce4c252d?w=100&h=100&fit=crop',
      category: 'Jewelry'
    },
    {
      id: '3',
      name: 'Copper Water Vessel Set',
      sales: 325000,
      orders: 18,
      growth: -2.1,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop',
      category: 'Metalwork'
    }
  ]

  const categoryPerformance = [
    { name: 'Textiles', value: 45, color: '#314f36' },
    { name: 'Jewelry', value: 30, color: '#65796e' },
    { name: 'Metalwork', value: 15, color: '#8aa876' },
    { name: 'Others', value: 10, color: '#c8ddb0' }
  ]

  const customerInsights = {
    topLocations: [
      { city: 'Mumbai', percentage: 28, orders: 45 },
      { city: 'Delhi', percentage: 22, orders: 36 },
      { city: 'Bangalore', percentage: 18, orders: 29 },
      { city: 'Chennai', percentage: 15, orders: 24 },
      { city: 'Kolkata', percentage: 17, orders: 28 }
    ],
    demographics: {
      ageGroups: [
        { range: '25-34', percentage: 35 },
        { range: '35-44', percentage: 30 },
        { range: '45-54', percentage: 20 },
        { range: '18-24', percentage: 15 }
      ]
    },
    avgRating: 4.7,
    totalReviews: 234,
    repeatCustomers: 68
  }

  const seasonalTrends = [
    { festival: 'Diwali', impact: '+45%', products: 'Traditional Textiles, Jewelry', peak: 'Oct-Nov' },
    { festival: 'Wedding Season', impact: '+32%', products: 'Sarees, Silver Items', peak: 'Nov-Feb' },
    { festival: 'Durga Puja', impact: '+28%', products: 'Traditional Wear', peak: 'Sep-Oct' },
    { festival: 'Holi', impact: '+15%', products: 'Colorful Textiles', peak: 'Mar' }
  ]

  const recommendations = [
    {
      type: 'pricing',
      title: 'Price Optimization',
      description: 'Your Banarasi sarees are 15% below market average. Consider a 10% price increase.',
      impact: '+12% revenue potential',
      priority: 'high',
      action: 'Adjust Pricing'
    },
    {
      type: 'inventory',
      title: 'Stock Alert',
      description: 'Silver earrings selling 3x faster than restocked. Increase inventory by 40%.',
      impact: 'Prevent stockouts',
      priority: 'urgent',
      action: 'Restock Now'
    },
    {
      type: 'marketing',
      title: 'Seasonal Opportunity',
      description: 'Durga Puja approaching. Promote traditional textiles now for 28% boost.',
      impact: '+28% seasonal sales',
      priority: 'medium',
      action: 'Launch Campaign'
    },
    {
      type: 'product',
      title: 'Product Bundling',
      description: 'Customers buying sarees often purchase jewelry. Create combo offers.',
      impact: '+18% avg order value',
      priority: 'medium',
      action: 'Create Bundles'
    }
  ]

  const alerts = [
    {
      type: 'success',
      title: 'Sales Spike Detected',
      message: 'Silver jewelry sales increased 45% this week',
      time: '2 hours ago'
    },
    {
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Handwoven scarves down to 3 units',
      time: '5 hours ago'
    },
    {
      type: 'info',
      title: 'Festival Season Approaching',
      message: 'Prepare for Durga Puja demand spike in 2 weeks',
      time: '1 day ago'
    }
  ]

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return <ArrowUpRight className="h-4 w-4 text-green-600" />
    if (growth < 0) return <ArrowDownRight className="h-4 w-4 text-red-600" />
    return <Activity className="h-4 w-4 text-gray-600" />
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-700 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'medium': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
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
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Insights to grow your craft business
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger className="w-40 bg-card/60 border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-card/60 border-primary/20">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-primary">₹3.28L</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+12.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold text-primary">168</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+8.2%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Order Value</p>
                  <p className="text-2xl font-bold text-primary">₹1,952</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+4.1%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                  <p className="text-2xl font-bold text-primary">4.7</p>
                  <div className="flex items-center text-sm text-green-600">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span>234 reviews</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-secondary/40 border border-primary/10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
            <TabsTrigger value="recommendations">AI Insights</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Trend */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(49, 79, 54, 0.1)" />
                      <XAxis dataKey="month" stroke="#65796e" />
                      <YAxis stroke="#65796e" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f4f8ef', 
                          border: '1px solid rgba(49, 79, 54, 0.15)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#314f36" 
                        fill="rgba(49, 79, 54, 0.1)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Category Performance */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle>Sales by Category</CardTitle>
                  <CardDescription>Revenue distribution across product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={categoryPerformance}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryPerformance.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {categoryPerformance.map((category, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm">{category.name}</span>
                        <span className="text-sm text-muted-foreground">{category.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performing Products */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Top Performing Products
                  </CardTitle>
                  <CardDescription>Your best-selling products this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 p-3 bg-secondary/20 rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>₹{product.sales.toLocaleString()}</span>
                          <span>{product.orders} orders</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getGrowthIcon(product.growth)}
                        <span className={`text-sm ${product.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {Math.abs(product.growth)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Inventory Recommendations */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Inventory Insights
                  </CardTitle>
                  <CardDescription>Stock levels and reorder recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Silver Filigree Earrings</span>
                      <Badge className="bg-red-100 text-red-700">Low Stock</Badge>
                    </div>
                    <Progress value={15} className="h-2" />
                    <p className="text-xs text-muted-foreground">3 units left • Reorder 40 units</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Handwoven Scarves</span>
                      <Badge className="bg-yellow-100 text-yellow-700">Medium Stock</Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-muted-foreground">12 units left • Consider restocking</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Banarasi Silk Sarees</span>
                      <Badge className="bg-green-100 text-green-700">Good Stock</Badge>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground">25 units left • Stock is sufficient</p>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">AI Recommendation</h4>
                    <p className="text-sm text-blue-700">
                      Based on sales velocity, increase silver jewelry inventory by 40% before the wedding season.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Customer Demographics */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Customer Demographics
                  </CardTitle>
                  <CardDescription>Age distribution of your customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerInsights.demographics.ageGroups.map((group, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{group.range} years</span>
                          <span>{group.percentage}%</span>
                        </div>
                        <Progress value={group.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{customerInsights.avgRating}</div>
                      <p className="text-xs text-muted-foreground">Avg Rating</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{customerInsights.totalReviews}</div>
                      <p className="text-xs text-muted-foreground">Total Reviews</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{customerInsights.repeatCustomers}%</div>
                      <p className="text-xs text-muted-foreground">Repeat Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Top Customer Locations
                  </CardTitle>
                  <CardDescription>Where your customers are located</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerInsights.topLocations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div>
                          <h4 className="font-medium">{location.city}</h4>
                          <p className="text-sm text-muted-foreground">{location.orders} orders</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">{location.percentage}%</div>
                          <Progress value={location.percentage} className="w-20 h-1 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Seasonal Tab */}
          <TabsContent value="seasonal" className="space-y-6">
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Seasonal Trends & Festival Impact
                </CardTitle>
                <CardDescription>How festivals and seasons affect your sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seasonalTrends.map((trend, index) => (
                    <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{trend.festival}</h4>
                        <Badge className="bg-green-100 text-green-700">{trend.impact}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Peak Season:</strong> {trend.peak}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Best Products:</strong> {trend.products}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                  <h4 className="font-medium mb-2">Upcoming Opportunities</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Durga Puja is approaching in 2 weeks. Historical data shows 28% increase in traditional textile sales.
                  </p>
                  <Button size="sm">
                    <Target className="h-4 w-4 mr-2" />
                    Prepare Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  AI-Powered Recommendations
                </CardTitle>
                <CardDescription>Smart insights to boost your sales and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge className={getPriorityColor(rec.priority)}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {rec.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">
                          {rec.impact}
                        </span>
                        <Button size="sm" variant="outline">
                          {rec.action}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="border-0 bg-card/60 backdrop-blur-sm card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications & Alerts
                </CardTitle>
                <CardDescription>Important updates about your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-secondary/20 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'success' ? 'bg-green-500' :
                        alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-medium">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Smart Alerts Enabled</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Get notified about inventory levels, sales spikes, and seasonal opportunities.
                  </p>
                  <Button size="sm" variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Customize Alerts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}