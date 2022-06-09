from django.shortcuts import render
from django.http import JsonResponse
from django.views import View

# python 지도 모듈 import
import folium
# Create your views here.

class Dashboard(View):
    def get(self, request):
        html = 'app_toc/dashboard.html'
        # html = 'app_toc/gauge.html'
        context = None
        return render(request, html, context)
    
    def post(self, request):
        pass
    
class Sub01(View):
    def get(self, request):
        html = 'app_toc/sub01.html'
        context = None
        return render(request, html, context)
    
    def post(self, request):
        pass

class Sub02(View):
    def get(self, request):
        # html = 'app_toc/sub02.html'
        html = 'app_toc/sub02_1.html'
        # html = 'app_toc/kakao_test.html'
        context = None
        
        # 지도 구현
        # map = folium.Map(location=[37.7854, 128.4698], zoom_start=8, width='100%', height='100%',)
        # maps=map._repr_html_()  #지도를 템플릿에 삽입하기위해 iframe이 있는 문자열로 반환 
        
        # context = {
        #     'map': maps,
        # }
        
        return render(request, html, context)
    
    def post(self, request):
        pass

class Sub02_1(View):
    def get(self, request):
        html = 'app_toc/sub02.html'
        context = None
        
        # 지도 구현
        map = folium.Map(location=[37.7854, 128.4698], zoom_start=8, width='100%', height='100%',)
        maps=map._repr_html_()  #지도를 템플릿에 삽입하기위해 iframe이 있는 문자열로 반환 
        
        context = {
            'map': maps,
        }
        
        return render(request, html, context)
    
    def post(self, request):
        pass
    
class Sub03(View):
    def get(self, request):
        html = 'app_toc/sub03.html'
        context = None
        
        return render(request, html, context)
    
    def post(self, request):
        pass            
    
class Sub04(View):
    def get(self, request):
        html = 'app_toc/sub04.html'
        context = None
        
        return render(request, html, context)
    
    def post(self, request):
        pass            
    
class Sub05(View):
    def get(self, request):
        html = 'app_toc/sub05.html'
        context = None
        
        return render(request, html, context)
    
    def post(self, request):
        pass                    