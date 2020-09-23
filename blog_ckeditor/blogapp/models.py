from django.db import models
# from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
 


class Blog(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    # body = models.TextField()
    # body = RichTextField()
    body = RichTextUploadingField()
