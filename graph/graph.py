import pandas as pd 
import numpy as np  
import plotly.graph_objs as go
import plotly.express as px

df = pd.read_excel('datos.xlsx', sheet_name='Info')
df.head()