import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Image, Clock, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface DashboardStats {
  totalInquiries: number;
  pendingInquiries: number;
  resolvedInquiries: number;
  galleryImages: number;
}

interface DashboardOverviewProps {
  onNavigate: (module: string) => void;
}

export function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const [stats, setStats] = useState<DashboardStats>({
    totalInquiries: 0,
    pendingInquiries: 0,
    resolvedInquiries: 0,
    galleryImages: 4, // Dummy count for now
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: inquiries } = await supabase
        .from('inquiries')
        .select('status');

      if (inquiries) {
        setStats({
          totalInquiries: inquiries.length,
          pendingInquiries: inquiries.filter(i => i.status === 'pending').length,
          resolvedInquiries: inquiries.filter(i => i.status === 'resolved').length,
          galleryImages: 4,
        });
      }
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Inquiries',
      value: stats.totalInquiries,
      icon: MessageSquare,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      module: 'inquiries',
    },
    {
      title: 'Pending',
      value: stats.pendingInquiries,
      icon: Clock,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      module: 'inquiries',
    },
    {
      title: 'Resolved',
      value: stats.resolvedInquiries,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      module: 'inquiries',
    },
    {
      title: 'Gallery Images',
      value: stats.galleryImages,
      icon: Image,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      module: 'gallery',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your school's inquiries, gallery, and more from one place.
              </p>
            </div>
            <div className="hidden md:block">
              <TrendingUp className="w-16 h-16 text-primary/30" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate(stat.module)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">
                      {isLoading ? '...' : stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button onClick={() => onNavigate('inquiries')}>
            <MessageSquare className="w-4 h-4 mr-2" />
            View Inquiries
          </Button>
          <Button variant="outline" onClick={() => onNavigate('gallery')}>
            <Image className="w-4 h-4 mr-2" />
            Manage Gallery
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
