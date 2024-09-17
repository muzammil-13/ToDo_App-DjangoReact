from rest_framework import serializers
from todoApp.models import ToDo

class TodoSerializer(serializers.ModelSerializer):
    # auto populated by app. User can’t manipulate
    created=serializers.ReadOnlyField()
    completed=serializers.ReadOnlyField()

    class Meta():
        model=ToDo
        fields=['id','title','memo','created','completed']


class TodoToggleCompleteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=ToDo
        fields=['id'] # why need to show id?
        read_only_fields=['title','memo','created','completed']
