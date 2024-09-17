from django.urls import path
from .import views

urlpatterns=[
    path("todoApp/",views.TodoListCreate.as_view()),
    path('todoApp/<int:pk>',views.TodoRetrieveUpdateDestroy.as_view()),
    path('todoApp/<int:pk>/complete',views.TodoToggleComplete.as_view()),
    path('signup/',views.signup),
]