from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'personal/index.html')
def resume(request):
    return render(request, 'personal/resume.html')
def projects(request):
    return render(request, 'personal/projects.html')
def about(request):
    return render(request, 'personal/about.html')
def contact(request):
    return render(request, 'personal/contact.html')
