import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Eye, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Label } from '@/components/ui/label';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { InquiryEditModal } from './InquiryEditModal';
import { DataTable, Column } from '@/components/ui/data-table';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';
import { apiClient } from '@/api/apiProvider';
import { getForm } from '@/api/generated/form/form';
import type { Form } from '@/api/generated/auntyKoSchoolAPI.schemas';

export function InquiriesModule() {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<Form[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState<Form | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [formToDelete, setFormToDelete] = useState<Form | null>(null);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const formService = getForm(apiClient);
        const response = await formService.getAllLeads();
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
        toast({
          variant: 'destructive',
          title: 'Error fetching inquiries',
          description: 'Failed to load inquiries',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchFormData();
  }, [toast]);

  // const fetchInquiries = async () => {
  //   setIsLoading(true);
  //   const { data, error } = await supabase
  //     .from('inquiries')
  //     .select('*')
  //     .order('created_at', { ascending: false });

  //   if (error) {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Error fetching inquiries',
  //       description: error.message,
  //     });
  //   } else {
  //     setInquiries(data || []);
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchInquiries();
  // }, []);

  const handleViewForm = (form: Form) => {
    setSelectedForm(form);
    setIsViewDialogOpen(true);
  };

  const handleEditClick = (form: Form) => {
    setSelectedForm(form);
    setIsEditDialogOpen(true);
  };

  const handleEditSave = (data: any) => {
    // TODO: Call API to update inquiry
    console.log('Edit save data:', data);
    toast({
      title: 'Edit ready',
      description: 'API integration pending for saving edits.',
    });
    setIsEditDialogOpen(false);
  };

  const handleDeleteClick = (form: Form) => {
    setFormToDelete(form);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!formToDelete) return;

    try {
      const formService = getForm(apiClient);
      if (formToDelete.leadId) {
        await formService.deleteLead(formToDelete.leadId);
        toast({
          title: 'Form deleted',
          description: 'The form submission has been deleted successfully.',
        });
        const response = await formService.getAllLeads();
        setFormData(response.data);
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error deleting form',
        description: 'Failed to delete the form submission',
      });
    }

    setIsDeleteDialogOpen(false);
    setFormToDelete(null);
  };

  const columns: Column<any>[] = [
    {
      key: 'leadName',
      header: 'Name',
      sortable: true,
    },
    {
      key: 'leadEmail',
      header: 'Email',
      sortable: true,
      render:(inquiry) => <span className=''>{inquiry.leadEmail}</span>
    },
    {
      key: 'leadPhone',
      header: 'Phone',
      sortable: true,
      render: (inquiry) => inquiry.leadPhone || 'N/A',
    },
    {
      key: 'leadEnquiry',
      header: 'Inquiry',
      render: (inquiry) => (
        <span className="max-w-[200px] truncate block" title={inquiry.leadEnquiry}>
          {inquiry.leadEnquiry?.length > 50 ? `${inquiry.leadEnquiry.substring(0, 50)}...` : inquiry.leadEnquiry}
        </span>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-card rounded-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Inquiries</h2>
            <p className="text-sm text-muted-foreground">
              View and manage all contact form submissions
            </p>
          </div>
        </div>

        <DataTable
          data={formData || []}
          columns={columns}
          onRowClick={handleViewForm}
          actions={(inquiry) => (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleViewForm(inquiry)}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleEditClick(inquiry)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive hover:text-destructive"
                onClick={() => handleDeleteClick(inquiry)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        />
      </div>

      {/* View Dialog using Modal */}
      <Modal
        open={isViewDialogOpen}
        onOpenChange={setIsViewDialogOpen}
        title="Inquiry Details"
        description="View the inquiry details"
        className="max-w-2xl"
        actions={[
          { label: 'Close', variant: 'outline', onClick: () => setIsViewDialogOpen(false) },
        ]}
      >
        {selectedForm && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground">Name</Label>
                <p className="font-medium">{selectedForm.leadName || 'N/A'}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Email</Label>
                <p className="font-medium">{selectedForm.leadEmail || 'N/A'}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Phone</Label>
                <p className="font-medium">{selectedForm.leadPhone || 'N/A'}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Lead ID</Label>
                <p className="font-medium">{selectedForm.leadId || 'N/A'}</p>
              </div>
            </div>
            <div>
              <Label className="text-muted-foreground">Inquiry</Label>
              <p className="mt-1 p-3 bg-muted rounded-md text-sm">
                {selectedForm.leadEnquiry || 'No inquiry text'}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Edit Dialog */}
      <InquiryEditModal
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        inquiry={selectedForm}
        onSave={handleEditSave}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Form Submission</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this form submission from {formToDelete?.leadName}? 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}
