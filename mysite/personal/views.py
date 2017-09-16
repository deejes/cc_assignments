from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'personal/home.html')
def resume(request):
    return render(request, 'personal/resume.html')
def projects(request):
    return render(request, 'personal/projects.html')
