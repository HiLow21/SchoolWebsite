import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const categories = [
  { value: 'events', label: 'Events' },
  { value: 'sports', label: 'Sports' },
  { value: 'academics', label: 'Academics' },
  { value: 'arts', label: 'Arts & Culture' },
  { value: 'campus', label: 'Campus' },
];

// Dummy images for demonstration
const dummyImages: GalleryImage[] = [
  { id: '1', url: '/placeholder.svg', title: 'Annual Day Celebration', category: 'events' },
  { id: '2', url: '/placeholder.svg', title: 'Sports Day 2024', category: 'sports' },
  { id: '3', url: '/placeholder.svg', title: 'Science Exhibition', category: 'academics' },
  { id: '4', url: '/placeholder.svg', title: 'Art Workshop', category: 'arts' },
];

export function GalleryModule() {
  const { toast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>(dummyImages);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isUploading, setIsUploading] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', category: 'events' });

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleUpload = () => {
    // Dummy upload functionality
    setIsUploading(true);
    setTimeout(() => {
      const newImg: GalleryImage = {
        id: Date.now().toString(),
        url: '/placeholder.svg',
        title: newImage.title || 'New Image',
        category: newImage.category,
      };
      setImages([newImg, ...images]);
      setNewImage({ title: '', category: 'events' });
      setIsUploading(false);
      toast({
        title: 'Image uploaded',
        description: 'Your image has been added to the gallery.',
      });
    }, 1500);
  };

  const handleDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id));
    toast({
      title: 'Image deleted',
      description: 'The image has been removed from the gallery.',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Upload Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Upload New Image</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Label htmlFor="image-upload" className="mb-2 block">Select Image</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Click to upload</p>
                <Input 
                  id="image-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div>
                <Label htmlFor="title">Image Title</Label>
                <Input
                  id="title"
                  placeholder="Enter image title"
                  value={newImage.title}
                  onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={newImage.category} 
                  onValueChange={(v) => setNewImage({ ...newImage, category: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleUpload} 
                disabled={isUploading}
                className="w-full"
              >
                {isUploading ? (
                  <>Uploading...</>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Image
                  </>
                )}
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Note: This is a demo upload. To enable actual uploads, storage needs to be configured.
          </p>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Gallery Images</h2>
              <p className="text-sm text-muted-foreground">
                Manage your school gallery images
              </p>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <Image className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No images found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative aspect-square rounded-lg overflow-hidden border bg-muted"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                    <p className="text-background text-sm font-medium text-center mb-2">
                      {image.title}
                    </p>
                    <span className="text-background/80 text-xs capitalize mb-3">
                      {image.category}
                    </span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(image.id)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
