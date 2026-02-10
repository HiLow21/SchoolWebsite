import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Form as FormData } from "@/api/generated/auntyKoSchoolAPI.schemas";

interface InquiryEditFormValues {
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadEnquiry: string;
  status: string;
}

interface InquiryEditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiry: FormData | null;
  onSave: (data: InquiryEditFormValues) => void;
  isSaving?: boolean;
}

export function InquiryEditModal({
  open,
  onOpenChange,
  inquiry,
  onSave,
  isSaving = false,
}: InquiryEditModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InquiryEditFormValues>();

  useEffect(() => {
    if (inquiry) {
      reset({
        leadName: inquiry.leadName ?? "",
        leadEmail: inquiry.leadEmail ?? "",
        leadPhone: inquiry.leadPhone ?? "",
        leadEnquiry: inquiry.leadEnquiry ?? "",
        status: "pending",
      });
    }
  }, [inquiry, reset]);

  const statusValue = watch("status");

  const onSubmit = (data: InquiryEditFormValues) => {
    onSave(data);
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Edit Inquiry"
      description="Update the inquiry details below."
      className="max-w-2xl"
      asForm
      onSubmit={handleSubmit(onSubmit)}
      actions={[
        {
          label: "Cancel",
          variant: "outline",
          onClick: () => onOpenChange(false),
        },
        {
          label: "Save Changes",
          loading: isSaving,
          type: "submit",
        },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="leadName">Name</Label>
          <Input
            id="leadName"
            {...register("leadName", { required: "Name is required" })}
          />
          {errors.leadName && (
            <p className="text-sm text-destructive">{errors.leadName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="leadEmail">Email</Label>
          <Input
            id="leadEmail"
            type="email"
            {...register("leadEmail", { required: "Email is required" })}
          />
          {errors.leadEmail && (
            <p className="text-sm text-destructive">{errors.leadEmail.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="leadPhone">Phone</Label>
          <Input id="leadPhone" {...register("leadPhone")} />
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <Select
            value={statusValue}
            onValueChange={(val) => setValue("status", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="leadEnquiry">Inquiry</Label>
        <Textarea
          id="leadEnquiry"
          rows={4}
          {...register("leadEnquiry", { required: "Inquiry is required" })}
        />
        {errors.leadEnquiry && (
          <p className="text-sm text-destructive">{errors.leadEnquiry.message}</p>
        )}
      </div>
    </Modal>
  );
}
