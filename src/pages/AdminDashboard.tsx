import { useState } from 'react';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { DashboardOverview } from '@/components/admin/modules/DashboardOverview';
import { InquiriesModule } from '@/components/admin/modules/InquiriesModule';
import { GalleryModule } from '@/components/admin/modules/GalleryModule';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AdminDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardOverview onNavigate={setActiveModule} />;
      case 'inquiries':
        return <InquiriesModule />;
      case 'gallery':
        return <GalleryModule />;
      case 'settings':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <Settings className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Settings</h2>
                <p className="text-muted-foreground">
                  Settings module coming soon. You'll be able to customize your admin panel here.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      default:
        return <DashboardOverview onNavigate={setActiveModule} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar activeModule={activeModule} onModuleChange={setActiveModule} />
        <SidebarInset className="flex-1">
          <header className="flex h-14 items-center gap-4 border-b bg-card px-6">
            <SidebarTrigger className="-ml-2" />
            <div className="flex-1">
              <h1 className="text-lg font-semibold capitalize">{activeModule}</h1>
            </div>
          </header>
          <main className="flex-1 p-6">
            {renderModule()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
