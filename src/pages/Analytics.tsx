import { AppLayout } from '@/components/layout/AppLayout';
import { ComingSoonCard } from '@/components/common/ComingSoonCard';
import { mockCompanies, getUniqueCompanyTypes, getUniqueCategories } from '@/data/mockCompanies';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Analytics() {
  const companyTypes = getUniqueCompanyTypes();
  const categories = getUniqueCategories();

  // Company type distribution
  const typeData = companyTypes.map(type => ({
    name: type,
    value: mockCompanies.filter(c => c.company_type === type).length,
  }));

  // Category distribution
  const categoryData = categories.map(category => ({
    name: category,
    value: mockCompanies.filter(c => c.category === category).length,
  }));

  // Employee size distribution
  const sizeGroups = ['51-200', '201-500', '501-1000', '1001-5000'];
  const sizeData = sizeGroups.map(size => ({
    name: size,
    value: mockCompanies.filter(c => c.employee_size === size).length,
  }));

  // Colors for charts - using semantic tokens
  const COLORS = ['hsl(217, 91%, 60%)', 'hsl(215, 14%, 46%)', 'hsl(220, 14%, 75%)', 'hsl(220, 13%, 91%)'];

  return (
    <AppLayout>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-medium text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Aggregated insights from company data
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Company Type Distribution */}
          <div className="card-flat p-5">
            <h3 className="font-medium mb-6">Company Type Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={typeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {typeData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid hsl(220, 13%, 91%)',
                      borderRadius: '6px',
                      fontSize: '12px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {typeData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {entry.name} ({entry.value})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Size Distribution */}
          <div className="card-flat p-5">
            <h3 className="font-medium mb-6">Employee Size Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sizeData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    tick={{ fontSize: 12 }} 
                    width={80}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid hsl(220, 13%, 91%)',
                      borderRadius: '6px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar 
                    dataKey="value" 
                    fill="hsl(217, 91%, 60%)" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="card-flat p-5 lg:col-span-2">
            <h3 className="font-medium mb-6">Companies by Category</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 11 }} 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid hsl(220, 13%, 91%)',
                      borderRadius: '6px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar 
                    dataKey="value" 
                    fill="hsl(217, 91%, 60%)" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Coming Soon Analytics */}
        <div>
          <h3 className="font-medium mb-4 text-muted-foreground">Future Analytics</h3>
          <div className="grid lg:grid-cols-3 gap-4">
            <ComingSoonCard
              title="Skill Trend Analysis"
              description="Track emerging skills and technology trends across companies"
              requiredData="Skill & role requirement tables"
            />
            <ComingSoonCard
              title="Outcome Correlations"
              description="Analyze placement outcomes against company characteristics"
              requiredData="Placement history & student profiles"
            />
            <ComingSoonCard
              title="Innovation Impact"
              description="Measure innovation metrics and research contributions"
              requiredData="Research & IP datasets"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
