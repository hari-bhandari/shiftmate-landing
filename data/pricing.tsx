export default {
  title: 'Pricing for every stage',
  description:
      'Affordable plans tailored to your business size. Pay monthly based on the number of employees.',
  plans: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Essential components, perfect to get started.',
      price: '£2 per employee/month',
      features: [
        {
          title: 'Employee Information Management',
        },
        {
          title: 'Shift Scheduling',
        },
        {
          title: 'Availability Management',
        },
        {
          title: 'Shift Swapping',
        },
        {
          title: 'Time and Attendance Management',
        },
        {
          title: 'Mobile Access',
        },
        {
          title: 'Messaging System',
        },
        {
          title: 'Shift Reminders',
        },
      ],
      action: {
        href: '/signup/basic',
      },
    },
    {
      id: 'plus',
      title: 'Plus',
      description: 'Additional features for comprehensive shift management.',
      price: '£4 per employee/month',
      isRecommended: true,
      features: [
        {
          title: 'Everything in Basic',
        },
        {
          title: 'Leave Management',
        },
        {
          title: 'Employee Self-service',
        },
        {
          title: 'Compliance Tracking',
        },
        {
          title: 'Shift Templates',
        },
        {
          title: 'Auto-Scheduling',
        },
      ],
      action: {
        href: '/signup/plus',
      },
    },
    {
      id: 'complete',
      title: 'Complete',
      description: 'Unlimited access to all features for advanced needs.',
      price: '£6 per employee/month',
      features: [
        {
          title: 'Everything in Plus',
        },
        {
          title: 'Payroll Management',
        },
        {
          title: 'Integration with Other HR Systems',
        },
        {
          title: 'Time-off Management',
        },
        {
          title: 'Employee Profiles',
        },
        {
          title: 'Customizable Reports',
        },
        {
          title: 'Performance Reviews',
        },
        {
          title: 'Geofencing',
        },
      ],
      action: {
        href: '/signup/complete',
      },
    },
  ],
};
